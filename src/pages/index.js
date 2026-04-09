import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description="IIC BO User Manual">
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <img src="/img/logo.png" alt="IIC BO" className={styles.logo} />
            <div>
              <h1 className={styles.title}>{siteConfig.title}</h1>
              <p className={styles.subtitle}>
                <Translate id="home.subtitle">IIC BO 시스템 사용자 매뉴얼</Translate>
              </p>
            </div>
          </div>

          {/* 시스템 소개 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.overview.title">시스템 소개</Translate>
            </h2>
            <p>
              <Translate id="home.overview.desc1a">IIC BO(Back Office)는,</Translate>
              <br />
              <Translate id="home.overview.desc1b">IIC 해외 법인을 위한 통합 운영 시스템으로</Translate>
              {' '}<strong><Translate id="home.overview.desc1c">매출·재고·스토어 운영 및 Rx 관리</Translate></strong>
              {' '}<Translate id="home.overview.desc1d">등 전반적인 운영 프로세스를 지원합니다.</Translate>
            </p>
          </section>

          {/* 주요 기능 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.features.title">주요 기능</Translate>
            </h2>
            <div className={styles.features}>
              <span className={styles.featureTag}><Translate id="home.features.orders">주문 관리</Translate></span>
              <span className={styles.featureTag}><Translate id="home.features.inventory">재고 관리</Translate></span>
              <span className={styles.featureTag}><Translate id="home.features.sales">매출 조회</Translate></span>
              <span className={styles.featureTag}><Translate id="home.features.rx">Rx 작업 관리</Translate></span>
              <span className={styles.featureTag}><Translate id="home.features.warranty">보증서 출력</Translate></span>
              <span className={styles.featureTag}><Translate id="home.features.membership">멤버십</Translate></span>
              <span className={styles.featureTag}><Translate id="home.features.store">스토어 운영</Translate></span>
              <span className={styles.featureTag}><Translate id="home.features.report">글로벌 리포트</Translate></span>
            </div>
          </section>

          {/* 연동 시스템 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.integrations.title">연동 시스템</Translate>
            </h2>
            <div className={styles.features}>
              <span className={styles.featureTag}>Local ERP</span>
              <span className={styles.featureTag}>HQ ERP</span>
              <span className={styles.featureTag}>OMS</span>
              <span className={styles.featureTag}>TMS</span>
              <span className={styles.featureTag}>WMS</span>
              <span className={styles.featureTag}>ECOM Admin</span>
            </div>
          </section>

          {/* 서버 접속 정보 & 문의 안내 */}
          <div className={styles.infoGrid}>
            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>
                <Translate id="home.server.title">서버 접속 정보</Translate>
              </h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}><Translate id="home.server.prod">운영</Translate></td>
                    <td><a href="https://bo.systemiic.com/en/signin" target="_blank" rel="noopener noreferrer">https://bo.systemiic.com/en/signin</a></td>
                  </tr>
                  <tr>
                    <td className={styles.label}><Translate id="home.server.dev">개발</Translate></td>
                    <td><a href="https://bo-dev.systemiic.com/en/signin" target="_blank" rel="noopener noreferrer">https://bo-dev.systemiic.com/en/signin</a></td>
                  </tr>
                </tbody>
              </table>
              <ul className={styles.infoNotes}>
                <li><Translate id="home.server.note1">계정 생성은 Operation 채널을 통해 문의해 주세요.</Translate></li>
                <li><Translate id="home.server.note2">발급 받은 계정의 초기 비밀번호는 변경하여 사용을 권장드립니다.</Translate></li>
                <li><Translate id="home.server.note3">계정 당 설정된 권한 변경 또한 관리자에게 문의해 주세요.</Translate></li>
              </ul>
            </section>

            <section className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>
                <Translate id="home.contact.title">시스템 운영 담당자</Translate>
              </h2>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.label}>PM</td>
                    <td>이우주</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>Develop</td>
                    <td>곽형규, 이수빈, 김윤욱</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>ERP</td>
                    <td>Denny Han, 전세령</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          {/* 사용자별 매뉴얼 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Translate id="home.manuals.title">사용자별 매뉴얼</Translate>
            </h2>
            <div className={styles.cards}>
              <Link className={styles.card} to="/docs/scm/purchase-order/initial-stock">
                <h3><span className={styles.cardEmoji}>📦</span>SCM</h3>
                <p>Logistics</p>
              </Link>
              <Link className={styles.card} to="/docs/md/intro">
                <h3><span className={styles.cardEmoji}>🏷️</span>MD</h3>
                <p>Merchandising</p>
              </Link>
              <Link className={styles.card} to="/docs/lab/intro">
                <h3><span className={styles.cardEmoji}>🥽</span>Lab</h3>
                <p>Lens Processing</p>
              </Link>
              <Link className={styles.card} to="/docs/store/system-login">
                <h3><span className={styles.cardEmoji}>🏩</span>Store</h3>
                <p>Store Operations</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
