import clsx from "clsx";
import styles from "./Checkbox.module.css";
import { useState, type FC } from "react";
import { IconCheck } from "@tabler/icons-react";

interface IProps {
  value?: boolean;
  onChange?: (state: boolean) => void;
  className?: string;
}
export const Checkbox: FC<IProps> = ({ value, onChange, className }) => {
  const toggleChecked = () => {
    onChange?.(!value);
  };

  const _class = clsx(styles.checkbox, className);
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={value}
        onClick={toggleChecked}
        className={styles.orig}
      />
      <div className={_class} onClick={toggleChecked} data-checked={value}>
        <IconCheck size={18} className={styles.icon} />
      </div>
    </div>
  );
};
