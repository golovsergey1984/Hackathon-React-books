import React from 'react';
import styles from './EmptyList.module.css';

const stepObj = [
  {
    title: 'Створіть особисту бібліотеку',
    description: 'Додавайте до неї кніжки, які маєте намір прочитати.',
    icon: 'book',
  },
  {
    title: 'Сформуйте своє перше тренування',
    description: ' Визначте ціль, оберіть період, розпочинайте тренування.',
    icon: 'flag',
  },
];

const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
      {stepObj.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles.stepNumber}>
            {index + 1}. Крок {index + 1}
          </div>
          <div className={[`${styles.stepTitle} ${styles[`--${step.icon}`]}`]}>
            {step.title}
          </div>
          <div className={styles.stepDescription}>{step.description}</div>
        </div>
      ))}
    </div>
  );
};

export default EmptyList;
