import { FunctionComponent } from "react";
import styles from "./Desktop.module.css";
const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.title}>
        <div className={styles.typographySubtitleLgSemiContainer}>
          <span>{`Let's calculate `}</span>
          <span className={styles.distance}>{`distance `}</span>
          <span>from Google maps</span>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.bg} />
      </div>
      <div className={styles.card}>
        <div className={styles.container} />
        <img className={styles.capture1Icon} alt="" src="/capture-1@2x.png" />
        <img className={styles.originIcon} alt="" src="/origin-icon.svg" />
        <div className={styles.destinationIcon}>
          <img className={styles.roomIcon} alt="" src="/room.svg" />
          <b className={styles.d}>D</b>
        </div>
        <img className={styles.stopIcon} alt="" src="/stop-icon.svg" />
      </div>
      <div className={styles.monthlyamountInfo}>
        <img className={styles.whiteBgIcon} alt="" src="/whitebg.svg" />
        <div className={styles.detail}>
          <img className={styles.grayBgIcon} alt="" src="/graybg.svg" />
          <div className={styles.breakdown}>
            <div className={styles.typographySubtitleLgSemiContainer}>
              <span>{`The distance between `}</span>
              <b>Mumbai</b>
              <span>{` and `}</span>
              <b>{`Delhi `}</b>
              <span>{`via the seleted route is `}</span>
              <b>1,427 kms</b>
              <span>.</span>
            </div>
          </div>
        </div>
        <div className={styles.monthlyAmount}>
          <div className={styles.amount}>
            <b className={styles.typographyHeadingmediumLg}>1,427 kms</b>
          </div>
          <div className={styles.monthlyAmount1}>
            <b className={styles.typographySubtitleLgSemiContainer}>Distance</b>
          </div>
        </div>
      </div>
      <img
        className={styles.gravitiLogo1}
        alt=""
        src="/graviti-logo-1@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/ellipse-20.svg" />
        <img className={styles.groupInner} alt="" src="/ellipse-201.svg" />
        <div className={styles.origin}>Origin</div>
        <div className={styles.mumbai}>Mumbai</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.groupChild} />
            <div className={styles.origin}>Destination</div>
          </div>
          <div className={styles.mumbai}>Delhi</div>
        </div>
        <div className={styles.destinationIcon1}>
          <img className={styles.roomIcon} alt="" src="/room1.svg" />
          <b className={styles.d}>D</b>
        </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.buttonLgNeutralWhite}>Calculate</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupChild} />
              <div className={styles.origin}>Stop</div>
            </div>
            <div className={styles.mumbai}>Ajmer</div>
          </div>
          <img className={styles.ellipseIcon} alt="" src="/stop-icon.svg" />
        </div>
        <div className={styles.addAnotherStopParent}>
          <div className={styles.addAnotherStop}>Add another stop</div>
          <img className={styles.addAltIcon} alt="" src="/addalt.svg" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
