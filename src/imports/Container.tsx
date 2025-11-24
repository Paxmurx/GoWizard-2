import svgPaths from "./svg-8mr08stkwo";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#18181c] text-[28px] w-full">The hard truth about car repairs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[744px] relative shrink-0 text-[#565660] text-[18px] w-full">Car breakdowns are a normal part of owning a car. But when something goes wrong, extended protection can shield you from the high cost of parts and labour which can add up to thousands of dollars.</p>
    </div>
  );
}

function Item() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[18px]">Clutch replacement</p>
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#4444ca] text-[24px] text-right">$2,300</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Item />
    </div>
  );
}

function Item1() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[18px]">Engine replacement</p>
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#4444ca] text-[24px] text-right">$7,600</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Item1 />
    </div>
  );
}

function Item2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[18px]">Average single repair</p>
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#4444ca] text-[24px] text-right">$4,950</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Item2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[640px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Header />
      <List />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="trending_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="trending_up">
          <mask height="40" id="mask0_6_7015" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="40" id="Bounding box" width="40" />
          </mask>
          <g mask="url(#mask0_6_7015)">
            <path d={svgPaths.p3521f000} fill="var(--fill-0, #4444CA)" id="trending_up_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0" data-name="Icon">
      <TrendingUp />
    </div>
  );
}

function Subhead() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Subhead">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[20px] w-full">300% Cost Increase</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">Repair costs have increased 300% in the last decade due to advanced technology in modern vehicles.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Subhead />
      <Text />
    </div>
  );
}

function IconGridCard() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="🟢 icon-grid-card">
      <Icon />
      <Container2 />
    </div>
  );
}

function AlertOutline() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="alert-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="alert-outline">
          <path d={svgPaths.pa37e380} fill="var(--fill-0, #4444CA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0" data-name="Icon">
      <AlertOutline />
    </div>
  );
}

function Subhead1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Subhead">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[20px] w-full">75% of Drivers</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">Can't afford major car repairs without going into debt or missing payments.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Subhead1 />
      <Text1 />
    </div>
  );
}

function IconGridCard1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="🟢 icon-grid-card">
      <Icon1 />
      <Container3 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="group">
          <mask height="40" id="mask0_6_7011" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="40" id="Bounding box" width="40" />
          </mask>
          <g mask="url(#mask0_6_7011)">
            <path d={svgPaths.p398aa200} fill="var(--fill-0, #4444CA)" id="group_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0" data-name="Icon">
      <Group />
    </div>
  );
}

function Subhead2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Subhead">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[20px] w-full">Millions at Risk</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">Millions of American are one major car repair away from financial hardship.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Subhead2 />
      <Text2 />
    </div>
  );
}

function IconGridCard2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="🟢 icon-grid-card">
      <Icon2 />
      <Container4 />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[640px] relative rounded-[16px] shrink-0 w-full" data-name="Grid">
      <IconGridCard />
      <IconGridCard1 />
      <IconGridCard2 />
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center p-[40px] relative w-full">
          <Container1 />
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default function Container5() {
  return (
    <div className="box-border content-stretch flex items-start relative shadow-[0px_12px_16px_-8px_rgba(0,0,0,0.12)] size-full" data-name="Container">
      <Card />
    </div>
  );
}