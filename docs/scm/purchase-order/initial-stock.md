---
sidebar_label: 법인 초기 재고 입고
sidebar_position: 1
---

# 📍 법인 초기 재고 입고

> KR HQ로부터 → US 법인으로의 입고 유형 프로세스를 의미합니다.
>
> 경로 : `Inventory > Inbound`

## AS-IS → TO-BE

| 구분 | AS-IS (Netsuite ERP) | TO-BE (IIC BO) |
|:---:|---|---|
| **입고 오더 생성** | HQ SAP 입고 정보 등록 → BO Inbound 전달 → Netsuite 오더 생성 | HQ SAP 입고 정보 등록 → <mark>BO Inbound 목록 생성</mark> → Netsuite 오더 생성 요청 |
| **입고 확정** | Netsuite에서 수동 상태 변경 | WMS 상태 수신으로 자동 확정 또는 BO 수기 처리 |
| **재고 반영** | Netsuite 내 수동 재고 반영 | 입고 확정 시 BO · ERP 재고 자동 반영 |
| **시스템 연동** | 단일 시스템 (Netsuite) | SAP ↔ IIC BO ↔ Netsuite ↔ WMS 실시간 연동 |
| **입고 이력** | Netsuite 내 조회 | IIC BO 입고 리스트에서 통합 조회 |

:::tip 핵심 변경점
- **수동 → 자동** — SAP ASN 기반 자동 PO 생성 및 WMS 연동으로 수작업 최소화
- **단일 → 통합** — SAP · Netsuite · WMS 간 실시간 연동으로 데이터 정합성 확보
- **ERP 의존도 감소** — Netsuite 직접 접근 없이 IIC BO에서 입고 프로세스 전체 관리 가능
:::

---

## 처리 절차

### `C2C` KR → US 법인 입고 유형

| Step | 처리 내용 |
|:---:|---|
| **1** | KR SAP로부터 정상적인 입고 예정 정보(ASN)이 발행 |
| **2** | IIC BO는 이를 수신 받아 Netsuite ERP로 PurchaseOrder 생성 요청 |
| **3** | 생성된 OrderID와 ASN 정보를 통해 WMS로 입고 요청 전송 |
| **4** | WMS로부터 **Completed(완료)** 상태 수신 시, IIC BO 입고 확정 및 ERP Order 상태 업데이트 요청 |

**WMS 수신 상태 종류**

| 상태 | 설명 |
|:---:|---|
| `Accept` | 입고 수신 |
| `Completed` | 입고 완료 → **입고 확정 트리거** |
| `Cancel` | 입고 취소 |

---

### US 입고 확정

US 입고 확정의 경우, **WMS 상태 수신** 또는 **IIC BO 수기 상태 처리**를 통해 가능하다.

:::caution 주의
IIC BO에서 상태를 변경하면 Netsuite로 연동되지만, NS에서만 처리할 경우 IIC BO와 상태 차이가 발생할 수 있다. (== **재고 차이 발생**)
:::

:::info 참고
위 모든 프로세스에 대한 SAP - IIC BO - NS 간의 인터페이스는 **실시간 처리**로 반영된다.
:::

---

## FAQ

### Q. IIC BO 입고 리스트에서 Netsuite 'PO' ID를 볼 순 없나요?

> ERP 사용성이 줄어짐에 따라, Order ID를 추가해 확인할 수 있도록 할 예정입니다.

---

### Q. 입고 예정 수량 ≠ 실입고 수량 일 때는 어떻게 하나요?

> **SCM 재열님과 소통되었던 협의 내용**

**Case 1. 실입고 수량이 적은 경우**

예) 입고 예정 100개 → 실제 입고 90개

| Step | 처리 내용 |
|:---:|---|
| **1** | 100개 입고 확정 |
| **2** | -10개 조정 생성 |
| **3** | -10개 조정에 대한 US 검토 및 ERP 수기 생성 *(소통 후 처리)* |

**Case 2. 실입고 수량이 많은 경우**

예) 입고 예정 100개 → 실제 입고 110개

| Step | 처리 내용 |
|:---:|---|
| **1** | 100개 입고 확정 |
| **2** | +10개 추가 수기 입고 등록 *(소통 후 처리)* |
| **3** | +10개 추가 등록에 대한 US 검토 및 ERP 수기 생성 |
