import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';

import magroImage from '../../assets/magro.png';
import normalImage from '../../assets/normal.png';
import gordoImage from '../../assets/gordo.png';
import obesidadeImage from '../../assets/obesidade.png';

type Props = {
    item: Level
};

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'magro' && <img src={magroImage} alt= "" width="40" />}
                {item.icon === 'normal' && <img src={normalImage} alt= "" width="100" />}
                {item.icon === 'gordo' && <img src={gordoImage} alt= "" width="70" />}
                {item.icon === 'obesidade' && <img src={obesidadeImage} alt= "" width="150" />}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}