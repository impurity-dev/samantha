import styles from './vertical-stepper.module.scss';

export type VerticalStepperProps = { items: string[]; active: number };
export function VerticalStepper({ items, active }: VerticalStepperProps) {
    return (
        <>
            <div className={styles.step}>
                <div>
                    <div className={styles.circle}>1</div>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={styles.step}>
                <div>
                    <div className={styles.circle}>2</div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </>
    );
}
