---
sidebar_label: AC Card Print Set
sidebar_position: 2
author: Wooju
created: "2026-04-21"
---

# 📍 시리얼 카드 출력 프린터 세팅

> AC Card 출력을 위한 프린터 드라이버 설치 가이드 입니다.

---

## 1. 프린터 Driver 설치

| Step | 내용 |
|:---:|---|
| **a** | PC와 프린터를 연결하고 **프린터 전원을 확인**합니다 |
| **b** | 프린터 기종 / PC OS에 맞는 드라이버를 다운로드 및 설치합니다 |
| | ⅰ. `DDInstall` |
| | ⅱ. Local USB Port |
| **c** | 드라이버 다운로드: https://www.idp-corp.com/index_kor/bbs/board.php?bo_table=s4_1 |
| **d** | 설치 후 **PC를 재시작**합니다 |

---

## 2. QZ Tray 설치

| Step | 내용 |
|:---:|---|
| **a** | QZ Tray 다운로드: https://qz.io/download/ |
| | 위 URL에서 설치합니다 |

---

## 3. 공개키 설정 (.pem 파일 세팅)

`qz-certificate.pem` 파일을 QZ Tray에 등록하는 과정입니다.

---

> **Step a.** `qz-certificate.pem` 파일을 다운로드합니다.

![qz-certificate.pem 다운로드](./img/스크린샷%202026-04-21%20오후%203.14.15.png)

---

> **Step b.** 작업표시줄에서 **qz-tray 아이콘**을 클릭합니다.

![qz-tray 메뉴](./img/스크린샷%202026-04-21%20오후%203.11.00.png)

---

> **Step c.** **Advanced → Site Manager** 를 선택합니다.

![Advanced > Site Manager](./img/스크린샷%202026-04-21%20오후%203.11.49.png)

---

> **Step d.** Site Manager 창에서 **`+` 아이콘**을 클릭하여 사이트를 추가하고, **Allowed** 탭에서 허용되었는지 확인합니다.

![Site Manager - Allowed 확인](./img/스크린샷%202026-04-21%20오후%203.12.23.png)

---

> **Step e.** **Browse...** 를 클릭하여 다운로드한 `.pem` 파일을 선택합니다.

![Browse로 pem 파일 등록](./img/스크린샷%202026-04-21%20오후%203.13.30.png)


---

## 4. 프린터 연결 확인

| Step | 내용 |
|:---:|---|
| **a** | BO > Front POS 진입 후 **개발자 모드**를 켜고, **콘솔** 탭을 선택합니다 |
| | Windows: `F12` 또는 `Ctrl + Shift + I` |
| | Mac: `Cmd + Option + I` |
| **b** | **프린터 명**이 정상적으로 출력되는지 확인합니다 |

:::danger 연결이 안 될 경우
`cradPrint.ts` 파일을 확인해 주세요.
:::
