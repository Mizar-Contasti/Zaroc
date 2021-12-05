import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/easyToUse.svg").default,
    description: (
      <>Zaroc provides you a Easy Path to Build strong Chatbot Backends</>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/focus.svg").default,
    description: (
      <>
        Zaroc lets you focus on smooth Development and Business Logic,
        we&apos;ll do the chores. Go ahead and lets Start <code>Coding</code>{" "}
        Right now!.
      </>
    ),
  },
  {
    title: "Integration with Platforms",
    Svg: require("../../static/img/platforms.svg").default,
    description: (
      <>
        Web, WebApp, Facebook, Messenger, WhatsApp, Telegram. With Zaroc you
        have a good to go in these Platforms
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
