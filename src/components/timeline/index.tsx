import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export function OutlinedTimeline({ list }: { list: string[] }) {
  return (
    <Timeline
      position='right'
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {list.map((item, ind, arr) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
            {arr[ind + 1] ? <TimelineConnector /> : null}
          </TimelineSeparator>
          <TimelineContent>{item}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
