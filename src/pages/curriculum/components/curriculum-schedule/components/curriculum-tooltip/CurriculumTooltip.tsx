import { IEnrolleeDirection } from '@/interfaces/enrollee-direction.interface';
import styles from './curriculum-tooltip.module.scss';
import { IEnrolleeCurriculum } from '@/interfaces/enrollee-basic-curriculum.interface';
import { Tooltip } from 'react-tooltip';
import { parseISO, format } from 'date-fns';


interface ICurriculumTooltipProps {
  anchorId: string;
  isOpen: boolean;
  place: 'top' | 'right' | 'bottom' | 'left';
  value: {
    direction: IEnrolleeDirection,
    curriculum: IEnrolleeCurriculum
  }
}

interface ICurriculumTooltipRowProps {
  title: string;
  children: React.ReactNode;
}

const CurriculumTooltipRow = (props: ICurriculumTooltipRowProps) => {
  return (
    <div className={styles.curriculumTooltipRow}>
      <div className={styles.curriculumTooltipRowTitle}>{props.title}</div>
      <div className={styles.curriculumTooltipRowContent}>{props.children}</div>
    </div>
  )
}

export const CurriculumTooltip = (props: ICurriculumTooltipProps) => {
  return (
    <Tooltip
      anchorId={props.anchorId}
      isOpen={props.isOpen}
      place={props.place}
      className={styles.curriculumTooltip}>
      <div className={styles.curriculumTooltipContent}>
        <div className={styles.curriculumTooltipColumn}>
          <CurriculumTooltipRow title={'Номер'}>{props.value.curriculum.id}</CurriculumTooltipRow>
          <CurriculumTooltipRow title={'Институт'}>{props.value.curriculum.institute}</CurriculumTooltipRow>
          <CurriculumTooltipRow title={'Профиль (специализация)'}>{props.value.direction.educationProfile}</CurriculumTooltipRow>
          <CurriculumTooltipRow title={'Наименование'}>{props.value.direction.direction}</CurriculumTooltipRow>
        </div>
        <div className={styles.curriculumTooltipColumn}>
          <CurriculumTooltipRow title={'Дата начала - Дата окончания'}>
            { format(parseISO(props.value.curriculum.from), 'dd.MM.yyyy') } - {format(parseISO(props.value.curriculum.to), 'dd.MM.yyyy')}
          </CurriculumTooltipRow>
          <CurriculumTooltipRow title={'Направление (специальность)'}>{props.value.direction.direction}</CurriculumTooltipRow>
          <CurriculumTooltipRow title={'Квалификация (степень)'}>{props.value.curriculum.degree}</CurriculumTooltipRow>
          <CurriculumTooltipRow title={'Стоимость обучения'}>
            <span className={styles.curriculumTooltipRowContentPrice}>{props.value.curriculum.price} руб.</span>
          </CurriculumTooltipRow>
        </div>
      </div>
    </Tooltip>
  )
}

export default CurriculumTooltip;
