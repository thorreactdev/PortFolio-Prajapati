import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import prodigy from "../assets/prodigy.jpg";
import codsoft from "../assets/codesoft.jpg";

export default function TimeLineComp() {
  return (
    <div className='p-3 mt-5'>
    <h1 className='text-white text-center text-2xl md:text-4xl my-10 font-medium'>Education And <span className='text-purple-600'>Experience</span></h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolSharp size="lg" />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Information Technology</h3>
    <h4 className="vertical-timeline-element-subtitle  flex items-center gap-1"><FaLocationDot/>India, Mumbai <em>(CGPA: 8.98)</em></h4>
    <p className="capitalize">
      University : Mumabi University <br/>
      Achievement : Sem 5 college Topper<br/>
      College: SM Shetty College, Powai 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  contentStyle={{ background: '#9333ea', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #9333ea' }}
    className="vertical-timeline-element--work"
    date="2020 - 2021"
    iconStyle={{ background: '#9333ea', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary School Certificate (HSC)</h3>

    <h4 className="vertical-timeline-element-subtitle flex items-center gap-1"><FaLocationDot/>India, Mumbai <em>(Percentage: 77.17%)</em></h4>
    <p>
      College: <abbr title='Ramniranjan Jhunjhunwala College'>RJ College</abbr>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: '#14b8a6', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  #14b8a6' }}
    className="vertical-timeline-element--work text-teal-500"
    date="2018 - 2019"
    iconStyle={{ background: '#14b8a6', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
    <h4 className="vertical-timeline-element-subtitle flex items-center gap-1"><FaLocationDot/>India, Mumbai <em>(Percentage: 74%)</em></h4>
    <p>
      School : Theresa High School
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  #ec4899' }}
    contentStyle={{ background: '#ec4899', color: '#fff' }}
    date="Feb 2024 - Mar 2024"
    iconStyle={{ background: '#ec4899', color: '#fff' }}
    icon={
        <img src={prodigy} alt='Prodigy Logo' title='Prodigy Logo' className='w-15 h-15 rounded-full flex items-center justify-center'/>
    }
  >
    <h3 className="vertical-timeline-element-title">Prodigy Infotech</h3>
    <h4 className="vertical-timeline-element-subtitle flex items-center gap-1"><FaLocationDot/>India, Mumbai</h4>
    <p>
      Role : Web Developer<br/>
      Job Type : Internship<br/>
      Location : Remote<br/>
      Duration : One Month
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  #ef4444' }}
    contentStyle={{ background: '#ef4444', color: '#fff' }}
    date="Mar 2024 - Apr 2024"
    iconStyle={{ background: '#ef4444', color: '#fff' }}
    icon={
        <img src={codsoft} alt='Prodigy Logo' title='CodSoft Logo' className='w-15 h-15 rounded-full flex items-center justify-center'/>
    }
  >
    <h3 className="vertical-timeline-element-title">CodSoft</h3>
    <h4 className="vertical-timeline-element-subtitle flex items-center gap-1"><FaLocationDot/>India, Mumbai</h4>
    <p>
      Role : Web Developer<br/>
      Job Type : Internship<br/>
      Location : Remote<br/>
      Duration : One Month
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}
