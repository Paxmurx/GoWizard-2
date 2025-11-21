import svgPaths from "./svg-iafgfa8yn0";
import imgImage5 from "figma:asset/300a32385fefa97df0d1d280b94824a0e549efb1.png";
import imgEnduranceWarrantyServicesLogo1 from "figma:asset/9ce6630a46ab433622933d49bebeec03a6786f78.png";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function BrandLogo() {
  return (
    <div
      className="h-[20px] md:h-[24px] relative shrink-0 w-[111px] md:w-[133px]"
      data-name="brand-logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 133 24"
      >
        <g id="brand-logo">
          <path
            d={svgPaths.p3b344100}
            fill="var(--fill-0, #5621AA)"
            id="Logo"
          />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Logo"
    >
      <BrandLogo />
    </div>
  );
}

function Label() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">
          Get a Free Quote Now
        </p>
      </div>
    </div>
  );
}

function ButtonCore() {
  return (
    <button
      type="button"
      className="bg-[#db0064] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 hover:bg-[#b90055] active:bg-[#9a0047] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden focus:outline-none"
      data-name=".🔒button-core"
    >
      <Label />
    </button>
  );
}

function ButtonStateCore() {
  return (
    <div
      className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore />
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="🟢 button"
    >
      <div className="flex flex-row items-center self-stretch">
        <ButtonStateCore />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0"
      data-name="Button"
    >
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex gap-[8px] items-center justify-between px-[24px] md:px-[48px] lg:px-0 py-[16px] relative shrink-0 w-full max-w-[800px]"
      data-name="Container"
    >
      <Logo />
      <Button1 />
    </div>
  );
}

function Navigation() {
  return (
    <nav
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full"
      data-name="Navigation"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none"
      />
      <Container />
    </nav>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Title"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] md:leading-[54px] not-italic relative shrink-0 text-[#18181c] text-[28px] md:text-[44px] text-center tracking-[-1px] w-full px-4 md:px-0">
        <span>{`US Drivers are `}</span>rushing
        <span>{` to get `}</span>
        <span
          className="bg-gradient-to-r from-[#FF27B3] via-[#5621aa] to-[#FF27B3] bg-clip-text text-transparent"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient 3s ease infinite",
          }}
        >
          extended auto warranty
        </span>
      </p>
    </div>
  );
}

function Supporting() {
  return (
    <div
      className="content-stretch flex items-start overflow-clip relative shrink-0 w-full"
      data-name="Supporting"
    >
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] md:leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px] md:text-[20px] text-center px-4 md:px-0">{`Without extended auto warranty, millions of Americans could be hit with expensive repair bills. Get protected before it's too late.`}</p>
    </div>
  );
}

function Text() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Text"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#565660] text-[12px] text-nowrap whitespace-pre">
        Advertorial
      </p>
      <Title />
      <Supporting />
    </div>
  );
}

function Image() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect =
          containerRef.current.getBoundingClientRect();
        const scrollProgress =
          (window.innerHeight - rect.top) /
          (window.innerHeight + rect.height);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = (scrollY - 0.5) * 180;

  return (
    <div
      ref={containerRef}
      className="content-stretch flex flex-col gap-[8px] h-[250px] md:h-[350px] lg:h-[409.5px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full"
      data-name="Image"
    >
      <div
        className="h-full relative rounded-[12px] shrink-0 w-full overflow-hidden"
        data-name="image 5"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img
            alt="Auto mechanic inspecting vehicle"
            className="absolute h-full w-full object-cover scale-125"
            src={imgImage5}
            style={{
              transform: `translateY(${parallaxOffset}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Shield() {
  return (
    <div
      className="relative shrink-0 size-[32px]"
      data-name="shield"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="shield">
          <mask
            height="32"
            id="mask0_1_6466"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="32"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="32"
              id="Bounding box"
              width="32"
            />
          </mask>
          <g mask="url(#mask0_1_6466)">
            <path
              d={svgPaths.p117e980}
              fill="var(--fill-0, #5621AA)"
              id="shield_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0"
      data-name="Icon"
    >
      <Shield />
    </div>
  );
}

function Header() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#18181c] text-[18px] w-full">
        90,000+
      </p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#565660] text-[14px] w-full">
        <p className="leading-[24px]">Electrical defects</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <Header />
    </div>
  );
}

function IconGridCard() {
  return (
    <div
      className="basis-0 bg-[#fcfbfe] grow min-h-px min-w-px relative rounded-[16px] shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(177,153,216,0.24)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] md:gap-[16px] items-center p-[10px] md:p-[12px] relative w-full">
          <Icon />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function AttachMoney() {
  return (
    <div
      className="relative shrink-0 size-[32px]"
      data-name="attach_money"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="attach_money">
          <mask
            height="32"
            id="mask0_1_6406"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="32"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="32"
              id="Bounding box"
              width="32"
            />
          </mask>
          <g mask="url(#mask0_1_6406)">
            <path
              d={svgPaths.p3954ba00}
              fill="var(--fill-0, #5621AA)"
              id="attach_money_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0"
      data-name="Icon"
    >
      <AttachMoney />
    </div>
  );
}

function Header1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#18181c] text-[18px] w-full">
        $7,600
      </p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#565660] text-[14px] w-full">
        <p className="leading-[24px]">Engine replacement</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <Header1 />
    </div>
  );
}

function IconGridCard1() {
  return (
    <div
      className="basis-0 bg-[#fcfbfe] grow min-h-px min-w-px relative rounded-[16px] shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(177,153,216,0.24)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Icon1 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Build() {
  return (
    <div
      className="relative shrink-0 size-[32px]"
      data-name="build"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="build">
          <mask
            height="32"
            id="mask0_1_6501"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="32"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="32"
              id="Bounding box"
              width="32"
            />
          </mask>
          <g mask="url(#mask0_1_6501)">
            <path
              d={svgPaths.p39510b00}
              fill="var(--fill-0, #5621AA)"
              id="build_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0"
      data-name="Icon"
    >
      <Build />
    </div>
  );
}

function Header2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#18181c] text-[18px] w-full">
        3 Repairs
      </p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#565660] text-[14px] w-full">
        <p className="leading-[24px]">Pays for itself</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <Header2 />
    </div>
  );
}

function IconGridCard2() {
  return (
    <div
      className="basis-0 bg-[#fcfbfe] grow min-h-px min-w-px relative rounded-[16px] shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(177,153,216,0.24)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Icon2 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row gap-[12px] md:gap-[16px] items-stretch md:items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <IconGridCard />
      <IconGridCard1 />
      <IconGridCard2 />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Get FREE Quote Now
        </p>
      </div>
    </div>
  );
}

function ButtonCore1() {
  return (
    <button
      type="button"
      className="bg-[#db0064] box-border content-stretch flex gap-[4px] items-center justify-center px-[48px] py-[16px] relative rounded-[12px] shrink-0 hover:bg-[#b90055] active:bg-[#9a0047] active:scale-[0.98] transition-all duration-200 cursor-pointer group overflow-hidden focus:outline-none"
      data-name=".🔒button-core"
    >
      <Label1 />
      <ArrowRight
        className="-me-1 ms-2 text-white opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}

function ButtonStateCore1() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 shadow-[0_6px_20px_rgba(219,0,100,0.4)] rounded-[12px]"
      data-name=".🔒button-state-core"
    >
      <ButtonCore1 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-center relative shadow-[0px_12px_16px_-8px_rgba(0,0,0,0.12)] shrink-0 w-full md:w-auto"
      data-name="🟢 button"
    >
      <ButtonStateCore1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full"
      data-name="Button group"
    >
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#18181c] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          Join 50,000+ protected drivers
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Text />
      <Image />
      <Container1 />
      <ButtonGroup />
      <Container2 />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start justify-center relative shrink-0 w-full"
      data-name="Hero"
    >
      <Container3 />
    </section>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[728px]"
      data-name="Container"
    >
      <Hero />
    </div>
  );
}

function AlertOutline() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="alert-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="alert-outline">
          <path
            d={svgPaths.p1024f00}
            fill="var(--fill-0, #8E130B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Icon"
    >
      <AlertOutline />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#8e130b] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          Since 2010
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0"
      data-name="Container"
    >
      <Icon3 />
      <Label2 />
    </div>
  );
}

function BadgeCore() {
  return (
    <div
      className="bg-[#fbd2d0] relative rounded-[104px] shrink-0"
      data-name=".🔒badge-core"
    >
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <Container5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f8a6a0] border-solid inset-0 pointer-events-none rounded-[104px]"
      />
    </div>
  );
}

function Badge() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 badge"
    >
      <BadgeCore />
    </div>
  );
}

function Body() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full px-4 md:px-0"
      data-name="body"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[28px] not-italic relative shrink-0 text-[#565660] text-[16px] md:text-[18px] text-center w-full max-w-[560px]">
        US car manufacturers have reported a jaw-dropping 90,000
        electrical defects on cars built since 2010 alone.
      </p>
    </div>
  );
}

function Header3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[832px] px-4 md:px-0"
      data-name="header"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] md:leading-[42px] not-italic relative shrink-0 text-[#18181c] text-[24px] md:text-[36px] text-center tracking-[-0.5px] w-full max-w-[560px]">
        <span>{`Car repair costs are `}</span>
        <span className="text-[#5621aa]">skyrocketing</span>
      </p>
      <Body />
    </div>
  );
}

function Header4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Header"
    >
      <Badge />
      <Header3 />
    </div>
  );
}

function Header5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] md:leading-[36px] relative shrink-0 text-[#18181c] text-[22px] md:text-[28px] w-full">
        The hard truth about car repairs
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[28px] max-w-[744px] relative shrink-0 text-[#565660] text-[16px] md:text-[18px] w-full">
        Car breakdowns are a normal part of owning a car. But
        when something goes wrong, extended protection can
        shield you from the high cost of parts and labour which
        can add up to thousands of dollars.
      </p>
    </div>
  );
}

function Item() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0"
      data-name="Item"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_2px] border-solid border-zinc-100 inset-0 pointer-events-none"
      />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] md:leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[16px] md:text-[18px]">
        Clutch replacement
      </p>
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] md:leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#5621aa] text-[18px] md:text-[24px] text-right">
        $2,300
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="List item"
    >
      <Item />
    </div>
  );
}

function Item1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0"
      data-name="Item"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_2px] border-solid border-zinc-100 inset-0 pointer-events-none"
      />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] md:leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[16px] md:text-[18px]">
        Engine replacement
      </p>
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] md:leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#5621aa] text-[18px] md:text-[24px] text-right">
        $7,600
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="List item"
    >
      <Item1 />
    </div>
  );
}

function Item2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0"
      data-name="Item"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_2px] border-solid border-zinc-100 inset-0 pointer-events-none"
      />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] md:leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[16px] md:text-[18px]">
        Average single repair
      </p>
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] md:leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#5621aa] text-[18px] md:text-[24px] text-right">
        $4,950
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="List item"
    >
      <Item2 />
    </div>
  );
}

function List() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start max-w-[640px] overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <Header5 />
      <List />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container6 />
    </div>
  );
}

function TrendingUp() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="trending_up"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="trending_up">
          <mask
            height="40"
            id="mask0_1_6441"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="40"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="40"
              id="Bounding box"
              width="40"
            />
          </mask>
          <g mask="url(#mask0_1_6441)">
            <path
              d={svgPaths.p3521f000}
              fill="var(--fill-0, #5621AA)"
              id="trending_up_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <TrendingUp />
    </div>
  );
}

function Subhead() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        300% Cost Increase
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Repair costs have increased 300% in the last decade
          due to advanced technology in modern vehicles.
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <Subhead />
      <Text4 />
    </div>
  );
}

function IconGridCard3() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
      data-name="🟢 icon-grid-card"
    >
      <Icon4 />
      <Container8 />
    </div>
  );
}

function AlertOutline1() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="alert-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="alert-outline">
          <path
            d={svgPaths.pa37e380}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <AlertOutline1 />
    </div>
  );
}

function Subhead1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        75% of Drivers
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Can’t afford major car repairs without going into debt
          or missing payments.
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <Subhead1 />
      <Text5 />
    </div>
  );
}

function IconGridCard4() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
      data-name="🟢 icon-grid-card"
    >
      <Icon5 />
      <Container9 />
    </div>
  );
}

function Group() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="group">
          <mask
            height="40"
            id="mask0_1_6485"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="40"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="40"
              id="Bounding box"
              width="40"
            />
          </mask>
          <g mask="url(#mask0_1_6485)">
            <path
              d={svgPaths.p398aa200}
              fill="var(--fill-0, #5621AA)"
              id="group_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <Group />
    </div>
  );
}

function Subhead2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        Millions at Risk
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Millions of American are one major car repair away
          from financial hardship.
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <Subhead2 />
      <Text6 />
    </div>
  );
}

function IconGridCard5() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
      data-name="🟢 icon-grid-card"
    >
      <Icon6 />
      <Container10 />
    </div>
  );
}

function Grid() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start max-w-[640px] relative rounded-[16px] shrink-0 w-full"
      data-name="Grid"
    >
      <IconGridCard3 />
      <IconGridCard4 />
      <IconGridCard5 />
    </div>
  );
}

function Card() {
  return (
    <div
      className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0"
      data-name="Card"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] md:gap-[80px] items-center p-[20px] md:p-[40px] relative rounded-[12px] w-full bg-[rgb(252,251,254)]">
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
          />
          <Container7 />
          <Grid />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Card />
    </div>
  );
}

function Container12() {
  return (
    <section
      className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center relative shrink-0 w-full max-w-[728px]"
      data-name="Container"
    >
      <Header4 />
      <Container11 />
    </section>
  );
}

function AirportShuttle() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="airport_shuttle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="airport_shuttle">
          <mask
            height="16"
            id="mask0_1_6434"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_1_6434)">
            <path
              d={svgPaths.p25b9a880}
              fill="var(--fill-0, #9F9FA5)"
              id="airport_shuttle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Icon"
    >
      <AirportShuttle />
    </div>
  );
}

function Label3() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          Choose Your Vehicle
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0"
      data-name="Container"
    >
      <Icon7 />
      <Label3 />
    </div>
  );
}

function BadgeCore1() {
  return (
    <div
      className="bg-white relative rounded-[104px] shrink-0"
      data-name=".🔒badge-core"
    >
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <Container13 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none rounded-[104px]"
      />
    </div>
  );
}

function Badge1() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 badge"
    >
      <BadgeCore1 />
    </div>
  );
}

function Text7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full max-w-[728px] px-4 md:px-0"
      data-name="Text"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] md:leading-[42px] min-w-full relative shrink-0 text-[#18181c] text-[24px] md:text-[36px] tracking-[-0.5px] w-[min-content]">
        <span>{`Select your car brand below to get a `}</span>
        <span className="text-[#5621aa]">free</span>
        <span>{` extended `}</span>
        <span className="text-[#5621aa]">
          auto warranty quote
        </span>
        <span>{` today`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[28px] relative shrink-0 text-[#565660] text-[16px] md:text-[18px] w-full max-w-[560px]">{`America's most trusted extended auto warranty provider with over 1 million satisfied customers`}</p>
    </div>
  );
}

function Header6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Header"
    >
      <Badge1 />
      <Text7 />
    </div>
  );
}

function Label4() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Chevrolet
        </p>
      </div>
    </div>
  );
}

function ButtonCore2() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label4 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore2() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore2 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="[grid-area:1_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore2 />
    </div>
  );
}

function Label5() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Ford</p>
      </div>
    </div>
  );
}

function ButtonCore3() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label5 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore3() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore3 />
    </div>
  );
}

function Button4() {
  return (
    <div
      className="[grid-area:1_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore3 />
    </div>
  );
}

function Label6() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Toyota</p>
      </div>
    </div>
  );
}

function ButtonCore4() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label6 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore4() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore4 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="[grid-area:1_/_3] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore4 />
    </div>
  );
}

function Label7() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">BMW</p>
      </div>
    </div>
  );
}

function ButtonCore5() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label7 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore5() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore5 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="[grid-area:2_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore5 />
    </div>
  );
}

function Label8() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Mercedes-Benz
        </p>
      </div>
    </div>
  );
}

function ButtonCore6() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label8 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore6() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore6 />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="[grid-area:2_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore6 />
    </div>
  );
}

function Label9() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Audi</p>
      </div>
    </div>
  );
}

function ButtonCore7() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label9 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore7() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore7 />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="[grid-area:2_/_3] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore7 />
    </div>
  );
}

function Label10() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Volkswagen
        </p>
      </div>
    </div>
  );
}

function ButtonCore8() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label10 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore8() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore8 />
    </div>
  );
}

function Button9() {
  return (
    <div
      className="[grid-area:2_/_4] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore8 />
    </div>
  );
}

function Label11() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Nissan</p>
      </div>
    </div>
  );
}

function ButtonCore9() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label11 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore9() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore9 />
    </div>
  );
}

function Button10() {
  return (
    <div
      className="[grid-area:3_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore9 />
    </div>
  );
}

function Label12() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Hyundai</p>
      </div>
    </div>
  );
}

function ButtonCore10() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label12 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore10() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore10 />
    </div>
  );
}

function Button11() {
  return (
    <div
      className="[grid-area:3_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore10 />
    </div>
  );
}

function Label13() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Kia</p>
      </div>
    </div>
  );
}

function ButtonCore11() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label13 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore11() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore11 />
    </div>
  );
}

function Button12() {
  return (
    <div
      className="[grid-area:3_/_3] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore11 />
    </div>
  );
}

function Label14() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Mazda</p>
      </div>
    </div>
  );
}

function ButtonCore12() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label14 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore12() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore12 />
    </div>
  );
}

function Button13() {
  return (
    <div
      className="[grid-area:3_/_4] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore12 />
    </div>
  );
}

function Label15() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Subaru</p>
      </div>
    </div>
  );
}

function ButtonCore13() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label15 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore13() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore13 />
    </div>
  );
}

function Button14() {
  return (
    <div
      className="[grid-area:4_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore13 />
    </div>
  );
}

function Label16() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Lexus</p>
      </div>
    </div>
  );
}

function ButtonCore14() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label16 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore14() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore14 />
    </div>
  );
}

function Button15() {
  return (
    <div
      className="[grid-area:4_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore14 />
    </div>
  );
}

function Label17() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Lincoln</p>
      </div>
    </div>
  );
}

function ButtonCore15() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label17 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore15() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore15 />
    </div>
  );
}

function Button16() {
  return (
    <div
      className="[grid-area:4_/_4] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore15 />
    </div>
  );
}

function Label18() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Buick</p>
      </div>
    </div>
  );
}

function ButtonCore16() {
  return (
    <button
      type="button"
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label18 />
        </div>
      </div>
    </button>
  );
}

function ButtonStateCore16() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore16 />
    </div>
  );
}

function Button17() {
  return (
    <div
      className="[grid-area:5_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore16 />
    </div>
  );
}

function Label19() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">GMC</p>
      </div>
    </div>
  );
}

function ButtonCore17() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label19 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore17() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore17 />
    </div>
  );
}

function Button18() {
  return (
    <div
      className="[grid-area:5_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore17 />
    </div>
  );
}

function Label20() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Jeep</p>
      </div>
    </div>
  );
}

function ButtonCore18() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label20 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore18() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore18 />
    </div>
  );
}

function Button19() {
  return (
    <div
      className="[grid-area:5_/_4] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore18 />
    </div>
  );
}

function Label21() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Dodge</p>
      </div>
    </div>
  );
}

function ButtonCore19() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label21 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore19() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore19 />
    </div>
  );
}

function Button20() {
  return (
    <div
      className="[grid-area:5_/_3] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore19 />
    </div>
  );
}

function Label22() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Chrysler
        </p>
      </div>
    </div>
  );
}

function ButtonCore20() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label22 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore20() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore20 />
    </div>
  );
}

function Button21() {
  return (
    <div
      className="[grid-area:6_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore20 />
    </div>
  );
}

function Label23() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Ram</p>
      </div>
    </div>
  );
}

function ButtonCore21() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label23 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore21() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore21 />
    </div>
  );
}

function Button22() {
  return (
    <div
      className="[grid-area:6_/_3] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore21 />
    </div>
  );
}

function Label24() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Porsche</p>
      </div>
    </div>
  );
}

function ButtonCore22() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label24 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore22() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore22 />
    </div>
  );
}

function Button23() {
  return (
    <div
      className="[grid-area:7_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore22 />
    </div>
  );
}

function Label25() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Bentley</p>
      </div>
    </div>
  );
}

function ButtonCore23() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label25 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore23() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore23 />
    </div>
  );
}

function Button24() {
  return (
    <div
      className="[grid-area:6_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore23 />
    </div>
  );
}

function Label26() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Maserati
        </p>
      </div>
    </div>
  );
}

function ButtonCore24() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label26 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore24() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore24 />
    </div>
  );
}

function Button25() {
  return (
    <div
      className="[grid-area:6_/_4] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore24 />
    </div>
  );
}

function Label27() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Maserati
        </p>
      </div>
    </div>
  );
}

function ButtonCore25() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label27 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore25() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore25 />
    </div>
  );
}

function Button26() {
  return (
    <div
      className="[grid-area:7_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore25 />
    </div>
  );
}

function Label28() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Ferrari</p>
      </div>
    </div>
  );
}

function ButtonCore26() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label28 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore26() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore26 />
    </div>
  );
}

function Button27() {
  return (
    <div
      className="[grid-area:7_/_3] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore26 />
    </div>
  );
}

function Label29() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">McLaren</p>
      </div>
    </div>
  );
}

function ButtonCore27() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label29 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore27() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore27 />
    </div>
  );
}

function Button28() {
  return (
    <div
      className="[grid-area:7_/_4] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore27 />
    </div>
  );
}

function Label30() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Aston Martin
        </p>
      </div>
    </div>
  );
}

function ButtonCore28() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label30 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore28() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore28 />
    </div>
  );
}

function Button29() {
  return (
    <div
      className="[grid-area:8_/_1] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore28 />
    </div>
  );
}

function Label31() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Other</p>
      </div>
    </div>
  );
}

function ButtonCore29() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label31 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore29() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore29 />
    </div>
  );
}

function Button30() {
  return (
    <div
      className="[grid-area:8_/_2] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore29 />
    </div>
  );
}

function Label32() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Cadillac
        </p>
      </div>
    </div>
  );
}

function ButtonCore30() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label32 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore30() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore30 />
    </div>
  );
}

function Button31() {
  return (
    <div
      className="[grid-area:4_/_3] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore30 />
    </div>
  );
}

function Label33() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Honda</p>
      </div>
    </div>
  );
}

function ButtonCore31() {
  return (
    <div
      className="basis-0 bg-[#4e1e9b] grow min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#3f1a7f] active:bg-[#321566] transition-colors duration-200 cursor-pointer"
      data-name=".🔒button-core"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Label33 />
        </div>
      </div>
    </div>
  );
}

function ButtonStateCore31() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0"
      data-name=".🔒button-state-core"
    >
      <ButtonCore31 />
    </div>
  );
}

function Button32() {
  return (
    <div
      className="[grid-area:1_/_4] content-stretch flex items-start relative self-start shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore31 />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div
      className="gap-[12px] md:gap-[16px] grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(44px,auto)] md:grid-rows-[fit-content(100%)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] h-auto md:h-[496px] relative shrink-0 w-full"
      data-name="Button group"
    >
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
    </div>
  );
}

function Grid1() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-center relative rounded-[16px] shrink-0 w-full"
      data-name="Grid"
    >
      <ButtonGroup1 />
    </div>
  );
}

function CheckCircleOutline() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="check-circle-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check-circle-outline">
          <path
            d={svgPaths.p33c9c280}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Check"
    >
      <CheckCircleOutline />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#565660] text-[18px] text-center text-nowrap whitespace-pre">
        Free quote in 60 seconds
      </p>
    </div>
  );
}

function CheckCircleOutline1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="check-circle-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check-circle-outline">
          <path
            d={svgPaths.p33c9c280}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Check1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Check"
    >
      <CheckCircleOutline1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#565660] text-[18px] text-center text-nowrap whitespace-pre">
        No obligation
      </p>
    </div>
  );
}

function CheckCircleOutline2() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="check-circle-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check-circle-outline">
          <path
            d={svgPaths.p33c9c280}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Check2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Check"
    >
      <CheckCircleOutline2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#565660] text-[18px] text-center text-nowrap whitespace-pre">
        Approved in 48 hours
      </p>
    </div>
  );
}

function UserInformation() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0"
      data-name="User information"
    >
      <Check />
      <Check1 />
      <Check2 />
    </div>
  );
}

function Label34() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Get My FREE Quote Now
        </p>
      </div>
    </div>
  );
}

function ButtonCore32() {
  return (
    <button
      type="button"
      className="bg-[#db0064] box-border content-stretch flex gap-[4px] items-center justify-center px-[48px] py-[16px] relative rounded-[12px] shrink-0 hover:bg-[#b90055] active:bg-[#9a0047] active:scale-[0.98] transition-all duration-200 cursor-pointer group overflow-hidden focus:outline-none"
      data-name=".🔒button-core"
    >
      <Label34 />
      <ArrowRight
        className="-me-1 ms-2 text-white opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}

function ButtonStateCore32() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 shadow-[0_6px_20px_rgba(219,0,100,0.4)]"
      data-name=".🔒button-state-core"
    >
      <ButtonCore32 />
    </div>
  );
}

function Button33() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore32 />
    </div>
  );
}

function ButtonGroup2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full"
      data-name="Button group"
    >
      <Button33 />
    </div>
  );
}

function Container14() {
  return (
    <section
      className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center relative shrink-0 w-full max-w-[728px]"
      data-name="Container"
    >
      <Header6 />
      <Grid1 />
      <UserInformation />
      <ButtonGroup2 />
    </section>
  );
}

function EditorChoice() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="editor_choice"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="editor_choice">
          <mask
            height="16"
            id="mask0_1_6413"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_1_6413)">
            <path
              d={svgPaths.p2cc0af70}
              fill="var(--fill-0, #565660)"
              id="editor_choice_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Icon"
    >
      <EditorChoice />
    </div>
  );
}

function Label35() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          Featured Provider
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0"
      data-name="Container"
    >
      <Icon8 />
      <Label35 />
    </div>
  );
}

function BadgeCore2() {
  return (
    <div
      className="bg-white relative rounded-[104px] shrink-0"
      data-name=".🔒badge-core"
    >
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <Container15 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none rounded-[104px]"
      />
    </div>
  );
}

function Badge2() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 badge"
    >
      <BadgeCore2 />
    </div>
  );
}

function Text8() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#18181c] text-center w-[728px]"
      data-name="Text"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] min-w-full relative shrink-0 text-[36px] tracking-[-0.5px] w-[min-content]">
        <span className="text-[#5621aa]">#</span>
        <span>
          {`1 Recommended: `}
          <br aria-hidden="true" />
        </span>
        <span className="text-[#5621aa]">Endurance</span>{" "}
        <span className="text-[#5621aa]">Auto Warranty</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] w-[560px]">{`America's most trusted extended auto warranty provider with over 1 million satisfied customers`}</p>
    </div>
  );
}

function Header7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Header"
    >
      <Badge2 />
      <Text8 />
    </div>
  );
}

function Schedule() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="schedule"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="schedule">
          <mask
            height="16"
            id="mask0_1_6477"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_1_6477)">
            <path
              d={svgPaths.p31a4df00}
              fill="var(--fill-0, #663E00)"
              id="schedule_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Icon"
    >
      <Schedule />
    </div>
  );
}

function Label36() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#663e00] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          Limited Time
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0"
      data-name="Container"
    >
      <Icon9 />
      <Label36 />
    </div>
  );
}

function BadgeCore3() {
  return (
    <div
      className="bg-[#ffebcc] relative rounded-[104px] shrink-0"
      data-name=".🔒badge-core"
    >
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <Container16 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ffd799] border-solid inset-0 pointer-events-none rounded-[104px]"
      />
    </div>
  );
}

function Badge3() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 badge"
    >
      <BadgeCore3 />
    </div>
  );
}

function Logo1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full"
      data-name="Logo"
    >
      <div
        className="h-[40px] relative shrink-0 w-[211px]"
        data-name="Endurance_Warranty_Services_Logo 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgEnduranceWarrantyServicesLogo1}
        />
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name=".🔒star-rating"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star">
          <path
            d={svgPaths.p1759d72}
            fill="var(--fill-0, #FF9A00)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StarRating1() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name=".🔒star-rating"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star-half">
          <path
            d={svgPaths.p2a0c2bc0}
            fill="var(--fill-0, #EEEEEF)"
            id="Vector"
          />
          <path
            d={svgPaths.p2289b170}
            fill="var(--fill-0, #FF9A00)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Rating() {
  return (
    <div
      className="content-stretch flex h-full items-center justify-center relative shrink-0"
      data-name="Rating"
    >
      {[...Array(4).keys()].map((_, i) => (
        <StarRating key={i} />
      ))}
      <StarRating1 />
    </div>
  );
}

function Number() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Number"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#db0064] text-[14px] text-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre cursor-pointer hover:text-[#b90055] active:text-[#9a0047] transition-colors duration-200">
          (23 Reviews)
        </p>
      </div>
    </div>
  );
}

function Rating1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="🟢 rating"
    >
      <div className="flex flex-row items-center self-stretch">
        <Rating />
      </div>
      <Number />
    </div>
  );
}

function Number1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="number"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#18181c] text-[16px] text-nowrap">
        <p className="leading-[26px] whitespace-pre">
          4.5 (15,000+ Reviews)
        </p>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Review"
    >
      <Rating1 />
      <Number1 />
    </div>
  );
}

function LogoAndRating() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full"
      data-name="Logo and rating"
    >
      <Logo1 />
      <Review />
    </div>
  );
}

function H3Subheader() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="H3 Subheader"
    >
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[0px] text-[28px] text-center">
        <span>{`Get `}</span>
        <span className="text-[#5621aa]">$</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#5621aa]">
          300 OFF
        </span>
        <span>{` any coverage plan`}</span>
      </p>
    </div>
  );
}

function TextBlock() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center max-w-[744px] min-w-[264px] relative shrink-0 w-full"
      data-name="🟢 text-block"
    >
      <H3Subheader />
    </div>
  );
}

function VerifiedUser() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser />
    </div>
  );
}

function Text9() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          Flexible Coverage Plans
        </p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[265px]"
      data-name="🟢 list-item"
    >
      <Icon10 />
      <Text9 />
    </div>
  );
}

function VerifiedUser1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser1 />
    </div>
  );
}

function Text10() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[98px]"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          Nationwide Service Network
        </p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[130px]"
      data-name="🟢 list-item"
    >
      <Icon11 />
      <Text10 />
    </div>
  );
}

function VerifiedUser2() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser2 />
    </div>
  );
}

function Text11() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[98px]"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          Fast Claims Processing
        </p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[130px]"
      data-name="🟢 list-item"
    >
      <Icon12 />
      <Text11 />
    </div>
  );
}

function VerifiedUser3() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser3 />
    </div>
  );
}

function Text12() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[98px]"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          24/7 Roadside Assistance
        </p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[130px]"
      data-name="🟢 list-item"
    >
      <Icon13 />
      <Text12 />
    </div>
  );
}

function List1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
      data-name="List"
    >
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[520px]"
      data-name="Container"
    >
      <Badge3 />
      <LogoAndRating />
      <TextBlock />
      <List1 />
    </div>
  );
}

function SupportAgent() {
  return (
    <div
      className="relative shrink-0 size-[72px]"
      data-name="support_agent"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 72 72"
      >
        <g id="support_agent">
          <mask
            height="72"
            id="mask0_1_6489"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="72"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="72"
              id="Bounding box"
              width="72"
            />
          </mask>
          <g mask="url(#mask0_1_6489)">
            <path
              d={svgPaths.p3b7f92f0}
              fill="var(--fill-0, #5621AA)"
              id="support_agent_2"
              opacity="0.7"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-[16px] shrink-0 size-[104px]"
      data-name="Image"
    >
      <SupportAgent />
    </div>
  );
}

function Call() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="call"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="call">
          <mask
            height="24"
            id="mask0_1_6473"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6473)">
            <path
              d={svgPaths.pb384280}
              fill="var(--fill-0, #5621AA)"
              id="call_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[243px]"
      data-name="Icon & Text"
    >
      <Call />
      <div className="basis-0 flex flex-col font-['Inter:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[18px]">
        <p className="leading-[28px]">Speak to an Expert NOW</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <IconText />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#18181c] text-[28px] w-[min-content]">
        <p className="leading-[36px]">(555) 123-4567</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic opacity-80 relative shrink-0 text-[#18181c] text-[16px] w-[min-content]">
        <p className="leading-[26px]">
          Call now to secure your $300 discount
        </p>
      </div>
    </div>
  );
}

function CtaCard() {
  return (
    <div
      className="bg-neutral-50 relative rounded-[12px] shrink-0 w-full"
      data-name="CTA Card"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-center p-[40px] relative rounded-[12px] w-full bg-[rgb(255,255,255)]">
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
          />
          <Image1 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Offer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full"
      data-name="Offer"
    >
      <Container17 />
      <CtaCard />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="relative shrink-0 size-[32px]"
      data-name="group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="group">
          <mask
            height="32"
            id="mask0_1_6378"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="32"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="32"
              id="Bounding box"
              width="32"
            />
          </mask>
          <g mask="url(#mask0_1_6378)">
            <path
              d={svgPaths.p11476b00}
              fill="var(--fill-0, #5621AA)"
              id="group_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div
      className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#18181c] text-[18px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">
          1 Million+
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#565660] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">
          Protected Drivers
        </p>
      </div>
    </div>
  );
}

function IconText1() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Icon & Text"
    >
      <Group1 />
      <Text14 />
    </div>
  );
}

function Quote() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Quote"
    >
      <IconText1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64px] justify-center leading-[0] not-italic relative shrink-0 text-[#5621aa] text-[20px] w-[520px]">
        <p className="leading-[32px]">
          “GoWizard saved me $4,800 when my transmission failed.
          It’s the best Investment I ever made!”
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic opacity-80 relative shrink-0 text-[#565660] text-[14px] text-right w-[min-content]">
        <p className="leading-[24px]">Sarah M. California</p>
      </div>
    </div>
  );
}

function Schedule1() {
  return (
    <div
      className="relative shrink-0 size-[32px]"
      data-name="schedule"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="schedule">
          <mask
            height="32"
            id="mask0_1_6374"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="32"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="32"
              id="Bounding box"
              width="32"
            />
          </mask>
          <g mask="url(#mask0_1_6374)">
            <path
              d={svgPaths.p102da900}
              fill="var(--fill-0, #5621AA)"
              id="schedule_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div
      className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#18181c] text-[18px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">
          24 / 7
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#565660] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">{`Support & Service`}</p>
      </div>
    </div>
  );
}

function IconText2() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Icon & Text"
    >
      <Schedule1 />
      <Text15 />
    </div>
  );
}

function Quote1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Quote"
    >
      <IconText2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#5621aa] text-[20px] w-[min-content]">
        <p className="leading-[32px]">
          “Had a breakdown at 2am. My cover had me towed and
          repairs within hours”
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic opacity-80 relative shrink-0 text-[#565660] text-[14px] text-right w-[min-content]">
        <p className="leading-[24px]">Mike T. Texas</p>
      </div>
    </div>
  );
}

function AttachMoney1() {
  return (
    <div
      className="relative shrink-0 size-[32px]"
      data-name="attach_money"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="attach_money">
          <mask
            height="32"
            id="mask0_1_6366"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="32"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="32"
              id="Bounding box"
              width="32"
            />
          </mask>
          <g mask="url(#mask0_1_6366)">
            <path
              d={svgPaths.p24a15000}
              fill="var(--fill-0, #5621AA)"
              id="attach_money_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div
      className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#18181c] text-[18px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">
          Peace of mind
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#565660] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">
          Costs
        </p>
      </div>
    </div>
  );
}

function IconText3() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="Icon & Text"
    >
      <AttachMoney1 />
      <Text16 />
    </div>
  );
}

function Quote2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Quote"
    >
      <IconText3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#5621aa] text-[20px] w-[min-content]">
        <p className="leading-[32px]">{`"Thanks to my GoWizard, I was back on the road in no time after my car broke down. All costs taken care of. "`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic opacity-80 relative shrink-0 text-[#565660] text-[14px] text-right w-[min-content]">
        <p className="leading-[24px]">Todd B. Washington</p>
      </div>
    </div>
  );
}

function Testimonals() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start justify-center relative rounded-[12px] shrink-0 w-full max-w-[520px]"
      data-name="Testimonals"
    >
      <Quote />
      <Quote1 />
      <Quote2 />
    </div>
  );
}

function Grid2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Grid"
    >
      <Offer />
      <Testimonals />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="bg-white relative rounded-[12px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="bg-[rgb(252,251,254)] box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center p-[24px] md:p-[32px] lg:p-[40px] relative rounded-[12px] w-full">
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
          />
          <Grid2 />
          <Button34 />
        </div>
      </div>
    </div>
  );
}

function Label37() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Get $300 OFF Your Quote
        </p>
      </div>
    </div>
  );
}

function ButtonCore33() {
  return (
    <button
      type="button"
      className="bg-[#db0064] box-border content-stretch flex gap-[4px] items-center justify-center px-[48px] py-[16px] relative rounded-[12px] shrink-0 hover:bg-[#b90055] active:bg-[#9a0047] active:scale-[0.98] transition-all duration-200 cursor-pointer group overflow-hidden focus:outline-none"
      data-name=".🔒button-core"
    >
      <Label37 />
      <ArrowRight
        className="-me-1 ms-2 text-white opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}

function ButtonStateCore33() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 shadow-[0_6px_20px_rgba(219,0,100,0.4)]"
      data-name=".🔒button-state-core"
    >
      <ButtonCore33 />
    </div>
  );
}

function Button34() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore33 />
    </div>
  );
}

function ButtonGroup3() {
  return null;
}

function Container19() {
  return (
    <section
      className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center relative shrink-0 w-full max-w-[728px]"
      data-name="Container"
    >
      <Header7 />
      <Container18 />
      <ButtonGroup3 />
    </section>
  );
}

function VerifiedUser4() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="verified_user">
          <mask
            height="16"
            id="mask0_1_6370"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_1_6370)">
            <path
              d={svgPaths.p9a9e000}
              fill="var(--fill-0, #565660)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser4 />
    </div>
  );
}

function Label38() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          Massive Benefits
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0"
      data-name="Container"
    >
      <Icon14 />
      <Label38 />
    </div>
  );
}

function BadgeCore4() {
  return (
    <div
      className="bg-white relative rounded-[104px] shrink-0"
      data-name=".🔒badge-core"
    >
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <Container20 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none rounded-[104px]"
      />
    </div>
  );
}

function Badge4() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 badge"
    >
      <BadgeCore4 />
    </div>
  );
}

function Text17() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-[728px]"
      data-name="Text"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] relative shrink-0 text-[#18181c] text-[36px] text-nowrap tracking-[-0.5px] whitespace-pre">
        <span>{`Extended auto warranty benefits in `}</span>
        <span className="text-[#5621aa]">2025</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#565660] text-[18px] w-[560px]">
        Extended auto warranty can help protect against
        unexpected and unwanted vehicle repair bills
      </p>
    </div>
  );
}

function Header8() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Header"
    >
      <Badge4 />
      <Text17 />
    </div>
  );
}

function Shield1() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="shield"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="shield">
          <mask
            height="40"
            id="mask0_1_6362"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="40"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="40"
              id="Bounding box"
              width="40"
            />
          </mask>
          <g mask="url(#mask0_1_6362)">
            <path
              d={svgPaths.p18bc7d72}
              fill="var(--fill-0, #5621AA)"
              id="shield_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <Shield1 />
    </div>
  );
}

function Subhead3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        Protection from expensive repairs
      </p>
    </div>
  );
}

function Text18() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          With the average repair costing between $1,000 and
          $7,600, extended auto warranty will pay for itself, on
          average, within 3 repairs.
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Subhead3 />
      <Text18 />
    </div>
  );
}

function IconGridCard6() {
  return (
    <div
      className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon15 />
      <Container21 />
    </div>
  );
}

function SelectCheckBox() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="select_check_box"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="select_check_box">
          <mask
            height="40"
            id="mask0_1_6358"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="40"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="40"
              id="Bounding box"
              width="40"
            />
          </mask>
          <g mask="url(#mask0_1_6358)">
            <path
              d={svgPaths.p1d7bb600}
              fill="var(--fill-0, #5621AA)"
              id="select_check_box_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <SelectCheckBox />
    </div>
  );
}

function Subhead4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        Custom plans
      </p>
    </div>
  );
}

function Text19() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Personalised protection to ensure you get the coverage
          your vehicle really needs and within your budget.
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Subhead4 />
      <Text19 />
    </div>
  );
}

function IconGridCard7() {
  return (
    <div
      className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon16 />
      <Container22 />
    </div>
  );
}

function Schedule2() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="schedule"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="schedule">
          <mask
            height="40"
            id="mask0_1_6420"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="40"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="40"
              id="Bounding box"
              width="40"
            />
          </mask>
          <g mask="url(#mask0_1_6420)">
            <path
              d={svgPaths.p2e40f000}
              fill="var(--fill-0, #5621AA)"
              id="schedule_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <Schedule2 />
    </div>
  );
}

function Subhead5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        No obligation quote
      </p>
    </div>
  );
}

function Text20() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Can’t afford major car repairs without going into debt
          or missing payments.
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Subhead5 />
      <Text20 />
    </div>
  );
}

function IconGridCard8() {
  return (
    <div
      className="[grid-area:3_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
      data-name="��� icon-grid-card"
    >
      <Icon17 />
      <Container23 />
    </div>
  );
}

function AccountGroupOutline() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="account-group-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="account-group-outline">
          <path
            d={svgPaths.p258f0640}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <AccountGroupOutline />
    </div>
  );
}

function Subhead6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        Trusted by millions
      </p>
    </div>
  );
}

function Text21() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Millions of American are one major car repair away
          from financial hardship.
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Subhead6 />
      <Text21 />
    </div>
  );
}

function IconGridCard9() {
  return (
    <div
      className="[grid-area:3_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon18 />
      <Container24 />
    </div>
  );
}

function Mobile() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="mobile"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="mobile">
          <path
            d={svgPaths.p259f4d80}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <Mobile />
    </div>
  );
}

function Subhead7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        Easy-to-use mobile app
      </p>
    </div>
  );
}

function Text22() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Repair costs have increased 300% in the last decade
          due to advanced technology in modern vehicles.
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Subhead7 />
      <Text22 />
    </div>
  );
}

function IconGridCard10() {
  return (
    <div
      className="[grid-area:2_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon19 />
      <Container25 />
    </div>
  );
}

function EditorChoice1() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="editor_choice"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="editor_choice">
          <mask
            height="40"
            id="mask0_1_6481"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="40"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="40"
              id="Bounding box"
              width="40"
            />
          </mask>
          <g mask="url(#mask0_1_6481)">
            <path
              d={svgPaths.p160aec00}
              fill="var(--fill-0, #5621AA)"
              id="editor_choice_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div
      className="bg-[rgba(86,33,170,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <EditorChoice1 />
    </div>
  );
}

function Subhead8() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Subhead"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px]">
        Bonus features
      </p>
    </div>
  );
}

function Text23() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[16px]">
        <p className="leading-[26px]">
          Many extended auto warranties often come with
          additional benefits such as: 24/7 roadside assistance,
          complete tire coverage, key replacement.
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Subhead8 />
      <Text23 />
    </div>
  );
}

function IconGridCard11() {
  return (
    <div
      className="[grid-area:2_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon20 />
      <Container26 />
    </div>
  );
}

function Grid3() {
  return (
    <div
      className="gap-[24px] md:gap-[32px] grid grid-cols-1 md:grid-cols-2 auto-rows-auto md:grid-rows-[repeat(3,_minmax(0px,_1fr))] h-auto md:h-[680px] relative rounded-[16px] shrink-0 w-full"
      data-name="Grid"
    >
      <IconGridCard6 />
      <IconGridCard7 />
      <IconGridCard8 />
      <IconGridCard9 />
      <IconGridCard10 />
      <IconGridCard11 />
    </div>
  );
}

function IconText4() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center relative shrink-0"
      data-name="Icon & Text"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#18181c] text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">
          Why choose extended warranty?
        </p>
      </div>
    </div>
  );
}

function VerifiedUser5() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser5 />
    </div>
  );
}

function Text24() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-90 relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          Save thousands on unexpected repairs
        </p>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="🟢 list-item"
    >
      <Icon21 />
      <Text24 />
    </div>
  );
}

function VerifiedUser6() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser6 />
    </div>
  );
}

function Text25() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[98px]"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-90 relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          24/7 nationwide roadside assistance
        </p>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="🟢 list-item"
    >
      <Icon22 />
      <Text25 />
    </div>
  );
}

function VerifiedUser7() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser7 />
    </div>
  );
}

function Text26() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[98px]"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-90 relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          Transferable coverage adds resale value
        </p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="🟢 list-item"
    >
      <Icon23 />
      <Text26 />
    </div>
  );
}

function VerifiedUser8() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="verified_user">
          <mask
            height="24"
            id="mask0_1_6392"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_6392)">
            <path
              d={svgPaths.p2075f700}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div
      className="box-border content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0"
      data-name="Icon"
    >
      <VerifiedUser8 />
    </div>
  );
}

function Text27() {
  return (
    <div
      className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-90 relative shrink-0 text-[#565660] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          Flexible payment plans available
        </p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="🟢 list-item"
    >
      <Icon24 />
      <Text27 />
    </div>
  );
}

function Grid4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] h-[160px] items-start relative shrink-0 w-full"
      data-name="Grid"
    >
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Label39() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Get Protected Today
        </p>
      </div>
    </div>
  );
}

function ButtonCore34() {
  return (
    <button
      type="button"
      className="bg-[#db0064] box-border content-stretch flex gap-[4px] items-center justify-center px-[48px] py-[16px] relative rounded-[12px] shrink-0 hover:bg-[#b90055] active:bg-[#9a0047] active:scale-[0.98] transition-all duration-200 cursor-pointer group overflow-hidden focus:outline-none"
      data-name=".🔒button-core"
    >
      <Label39 />
      <ArrowRight
        className="-me-1 ms-2 text-white opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}

function ButtonStateCore34() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 shadow-[0_6px_20px_rgba(219,0,100,0.4)]"
      data-name=".🔒button-state-core"
    >
      <ButtonCore34 />
    </div>
  );
}

function Button35() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-full"
      data-name="🟢 button"
    >
      <ButtonStateCore34 />
    </div>
  );
}

function ButtonGroup4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full"
      data-name="Button group"
    >
      <Button35 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <IconText4 />
      <Grid4 />
      <ButtonGroup4 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[376px]"
      data-name="Container"
    >
      <Container27 />
    </div>
  );
}

function CtaCard1() {
  return (
    <div
      className="bg-[#fcfbfe] box-border content-stretch flex flex-col gap-[32px] items-center p-[40px] relative rounded-[12px] shrink-0 w-full"
      data-name="CTA Card"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
      />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Grid3 />
      <CtaCard1 />
    </div>
  );
}

function Container30() {
  return (
    <section
      className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center relative shrink-0 w-full max-w-[728px]"
      data-name="Container"
    >
      <Header8 />
      <Container29 />
    </section>
  );
}

function Text28() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-[728px]"
      data-name="Text"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[#18181c] text-[24px] w-[min-content]">
        Drive with Confidence. Backed by the Best in the
        Business.
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#565660] text-[18px] w-[560px]">{`A- Rated & Accredited by the Better Business Bureau.`}</p>
    </div>
  );
}

function Logos() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-[728px]"
      data-name="Logos"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 728 40"
      >
        <g id="Logos">
          <g id="Consumer Affairs logo">
            <path
              clipRule="evenodd"
              d={svgPaths.p3a5af080}
              fill="var(--fill-0, #18181C)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3ba0df00}
              fill="var(--fill-0, #18181C)"
              fillRule="evenodd"
            />
          </g>
          <path
            clipRule="evenodd"
            d={svgPaths.pc11ed70}
            fill="var(--fill-0, #18181C)"
            fillRule="evenodd"
            id="BBB"
          />
          <g id="trustpilot-logo">
            <path
              d={svgPaths.p24a77a80}
              fill="var(--fill-0, #18181C)"
              id="Shape"
            />
            <g id="Star">
              <path
                d={svgPaths.p10971b00}
                fill="var(--fill-0, #18181C)"
                id="Subtract"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <section
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0"
      data-name="Container"
    >
      <Text28 />
      <Logos />
    </section>
  );
}

function Hr() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="<hr>"
    >
      <div className="size-full md:max-[820px]:w-[672px]"></div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Hr1() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[1192px] min-w-[272px] relative shrink-0 w-[728px]"
      data-name="<hr>"
    >
      <Hr />
    </div>
  );
}

function Schedule3() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="schedule"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="schedule">
          <mask
            height="16"
            id="mask0_1_6351"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_1_6351)">
            <path
              d={svgPaths.p31a4df00}
              fill="var(--fill-0, #565660)"
              id="schedule_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Icon"
    >
      <Schedule3 />
    </div>
  );
}

function Label40() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0"
      data-name="Label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#565660] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          Last chance
        </p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0"
      data-name="Container"
    >
      <Icon25 />
      <Label40 />
    </div>
  );
}

function BadgeCore5() {
  return (
    <div
      className="bg-white relative rounded-[104px] shrink-0"
      data-name=".🔒badge-core"
    >
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <Container32 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none rounded-[104px]"
      />
    </div>
  );
}

function Badge5() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 badge"
    >
      <BadgeCore5 />
    </div>
  );
}

function Body1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
      data-name="body"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic opacity-70 relative shrink-0 text-[#18181c] text-[18px] text-center w-[728px]">{`Follow these 3 simple steps and you'll have your quote in minutes.`}</p>
    </div>
  );
}

function Header9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full"
      data-name="🟠_header"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] not-italic relative shrink-0 text-[#18181c] text-[36px] text-center tracking-[-0.5px] w-[728px]">
        How can I get a free extended auto warranty quote?
      </p>
      <Body1 />
    </div>
  );
}

function Header10() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full p-[0px]"
      data-name="Header"
    >
      <Badge5 />
      <Header9 />
    </div>
  );
}

function TaskAlt() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="task_alt"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="task_alt">
          <mask
            height="40"
            id="mask0_1_6427"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="40"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="40"
              id="Bounding box"
              width="40"
            />
          </mask>
          <g mask="url(#mask0_1_6427)">
            <path
              d={svgPaths.p3fcfc980}
              fill="var(--fill-0, #5621AA)"
              id="task_alt_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.24)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <TaskAlt />
    </div>
  );
}

function Header11() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px] text-center">
        Click the button below
      </p>
    </div>
  );
}

function Text29() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic opacity-70 relative shrink-0 text-[#18181c] text-[16px] text-center">
        <p className="leading-[26px]">
          Start your free quote process
        </p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Header11 />
      <Text29 />
    </div>
  );
}

function IconGridCard12() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center max-w-[576px] min-h-px min-w-[221px] relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon26 />
      <Container33 />
    </div>
  );
}

function HelpCircleOutline() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="help-circle-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="help-circle-outline">
          <path
            d={svgPaths.p23566400}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.24)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <HelpCircleOutline />
    </div>
  );
}

function Header12() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px] text-center">
        Answer a few simple questions
      </p>
    </div>
  );
}

function Text30() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic opacity-70 relative shrink-0 text-[#18181c] text-[16px] text-center">
        <p className="leading-[26px]">
          Tell us about your vehicle
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Header12 />
      <Text30 />
    </div>
  );
}

function IconGridCard13() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center max-w-[576px] min-h-px min-w-[221px] relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon27 />
      <Container34 />
    </div>
  );
}

function ClipboardListOutline() {
  return (
    <div
      className="relative shrink-0 size-[40px]"
      data-name="clipboard-list-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="clipboard-list-outline">
          <path
            d={svgPaths.p3d195400}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[12px] shrink-0"
      data-name="Icon"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.24)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <ClipboardListOutline />
    </div>
  );
}

function Header13() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#18181c] text-[20px] text-center">
        Receive your free quote
      </p>
    </div>
  );
}

function Text31() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic opacity-70 relative shrink-0 text-[#18181c] text-[16px] text-center">
        <p className="leading-[26px]">
          From a trusted supplier today!
        </p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Header13 />
      <Text31 />
    </div>
  );
}

function IconGridCard14() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center max-w-[576px] min-h-px min-w-[221px] relative shrink-0"
      data-name="🟢 icon-grid-card"
    >
      <Icon28 />
      <Container35 />
    </div>
  );
}

function Grid5() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start relative rounded-[16px] shrink-0 w-full"
      data-name="Grid"
    >
      <IconGridCard12 />
      <IconGridCard13 />
      <IconGridCard14 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[672px] p-[0px] md:max-[820px]:w-full"
      data-name="Container"
    >
      <Header10 />
      <Grid5 />
    </div>
  );
}

function VerifiedUser9() {
  return (
    <div
      className="relative shrink-0 size-[48px]"
      data-name="verified_user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="verified_user">
          <mask
            height="48"
            id="mask0_1_6344"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="48"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="48"
              id="Bounding box"
              width="48"
            />
          </mask>
          <g mask="url(#mask0_1_6344)">
            <path
              d={svgPaths.p17a15c00}
              fill="var(--fill-0, #5621AA)"
              id="verified_user_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconAndText() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0"
      data-name="Icon and text"
    >
      <VerifiedUser9 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(24,24,28,0.5)] text-center text-nowrap tracking-[1.92px] uppercase whitespace-pre">
        Ready to get protected?
      </p>
    </div>
  );
}

function CheckCircleOutline3() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="check-circle-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check-circle-outline">
          <path
            d={svgPaths.p33c9c280}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Check3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Check"
    >
      <CheckCircleOutline3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] not-italic opacity-90 relative shrink-0 text-[#565660] text-[16px] text-center text-nowrap whitespace-pre">
        Free quote in 60 seconds
      </p>
    </div>
  );
}

function CheckCircleOutline4() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="check-circle-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check-circle-outline">
          <path
            d={svgPaths.p33c9c280}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Check4() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Check"
    >
      <CheckCircleOutline4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] not-italic opacity-90 relative shrink-0 text-[#565660] text-[16px] text-center text-nowrap whitespace-pre">
        No obligation
      </p>
    </div>
  );
}

function CheckCircleOutline5() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="check-circle-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check-circle-outline">
          <path
            d={svgPaths.p33c9c280}
            fill="var(--fill-0, #5621AA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Check5() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Check"
    >
      <CheckCircleOutline5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] not-italic opacity-90 relative shrink-0 text-[#565660] text-[16px] text-center text-nowrap whitespace-pre">
        Approved in 48 hours
      </p>
    </div>
  );
}

function UserInformation1() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full"
      data-name="User information"
    >
      <Check3 />
      <Check4 />
      <Check5 />
    </div>
  );
}

function Header14() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Header"
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#18181c] text-[0px] text-[28px] text-center w-full">
        <span>{`Receive a free `}</span>extended auto warranty
        quote<span>{` from a trusted supplier today!`}</span>
      </p>
      <UserInformation1 />
    </div>
  );
}

function Label41() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0"
      data-name="label"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">
          Get Protected Today
        </p>
      </div>
    </div>
  );
}

function ButtonCore35() {
  return (
    <button
      type="button"
      className="bg-[#db0064] box-border content-stretch flex gap-[4px] items-center justify-center px-[48px] py-[16px] relative rounded-[12px] shrink-0 hover:bg-[#b90055] active:bg-[#9a0047] active:scale-[0.98] transition-all duration-200 cursor-pointer group overflow-hidden focus:outline-none"
      data-name=".🔒button-core"
    >
      <Label41 />
      <ArrowRight
        className="-me-1 ms-2 text-white opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}

function ButtonStateCore35() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 shadow-[0_6px_20px_rgba(219,0,100,0.4)]"
      data-name=".🔒button-state-core"
    >
      <ButtonCore35 />
    </div>
  );
}

function Button36() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 button"
    >
      <ButtonStateCore35 />
    </div>
  );
}

function ButtonGroup5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Button group"
    >
      <Button36 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] min-w-full not-italic relative shrink-0 text-[#565660] text-[16px] text-center w-[min-content]">
        {`Join over 50,000 drivers who have saved thousands with extended auto `}
        <br aria-hidden="true" />
        warranty protection
      </p>
    </div>
  );
}

function Text32() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Text"
    >
      <IconAndText />
      <Header14 />
      <ButtonGroup5 />
    </div>
  );
}

function Header15() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full"
      data-name="Header"
    >
      <Text32 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="bg-[rgb(252,251,254)] box-border content-stretch flex flex-col gap-[24px] items-center p-[40px] relative rounded-[12px] shrink-0 w-[728px] md:max-[820px]:w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
      />
      <Header15 />
    </div>
  );
}

function StarRating2() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name=".🔒star-rating"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star">
          <path
            d={svgPaths.p1759d72}
            fill="var(--fill-0, #FF9A00)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StarRating3() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name=".🔒star-rating"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star-half">
          <path
            d={svgPaths.p2a0c2bc0}
            fill="var(--fill-0, #EEEEEF)"
            id="Vector"
          />
          <path
            d={svgPaths.p2289b170}
            fill="var(--fill-0, #FF9A00)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Rating2() {
  return (
    <div
      className="content-stretch flex h-full items-center justify-center relative shrink-0"
      data-name="Rating"
    >
      {[...Array(4).keys()].map((_, i) => (
        <StarRating2 key={i} />
      ))}
      <StarRating3 />
    </div>
  );
}

function Number2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Number"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#db0064] text-[14px] text-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre cursor-pointer hover:text-[#b90055] active:text-[#9a0047] transition-colors duration-200">
          (23 Reviews)
        </p>
      </div>
    </div>
  );
}

function Rating3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="🟢 rating"
    >
      <div className="flex flex-row items-center self-stretch">
        <Rating2 />
      </div>
      <Number2 />
    </div>
  );
}

function Container38() {
  return null;
}

function Container39() {
  return (
    <section
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 md:max-[820px]:w-[672px]"
      data-name="Container"
    >
      <Container36 />
      <Container37 />
      <Container38 />
    </section>
  );
}

function Hr2() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="<hr>"
    >
      <div className="size-full">
        <div className="h-px w-full mx-[48px]" />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Hr3() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[1192px] min-w-[272px] relative shrink-0 w-[728px] md:max-[820px]:w-full"
      data-name="<hr>"
    >
      <Hr2 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[40px] py-0 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-black">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] mb-[22px] text-[#565660] text-[14px]">
              GoWizard does not offer, make available, sell or
              solicit sales for service contracts or warranties.
              GoWizard does not do business in California at
              this time. The information and resources provided
              on this site are not intended to be and should not
              be construed as an offer to sell in any state in
              which this site is not licensed to do business.
            </p>
            <p className="leading-[24px] text-[14px]">
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[#565660]">
                ¹ 90,000 car defects: data from
              </span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#db0064] underline">
                &nbsp;
              </span>
              <a
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#db0064] underline"
                href="https://go-wizard.vercel.app/#"
              >
                <span
                  className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] not-italic text-[14px]"
                  href="https://go-wizard.vercel.app/#"
                >
                  US Transport Department
                </span>
              </a>
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[#565660]">
                <br aria-hidden="true" />
                {`² 'Clutch Replacement Costs'`}
              </span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#db0064] underline">
                &nbsp;
              </span>
              <a
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#db0064] underline"
                href="https://go-wizard.vercel.app/#"
              >
                <span
                  className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] not-italic text-[14px]"
                  href="https://go-wizard.vercel.app/#"
                >
                  Car Talk
                </span>
              </a>
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[#565660]">
                <br aria-hidden="true" />
                {`³ 'Engine Replacement Costs' `}
              </span>
              <a
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#db0064] underline"
                href="https://go-wizard.vercel.app/#"
              >
                <span
                  className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] not-italic text-[14px]"
                  href="https://go-wizard.vercel.app/#"
                >
                  Auto Zone
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header16() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[728px]"
      data-name="Header"
    >
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#18181c] text-[16px]">
        <p className="leading-[26px]">Advertising disclosure</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#18181c] text-[14px] w-full">
        <p className="leading-[24px]">
          GoWizard is a free online resource committed to
          helping you find the best consumer and business
          products and services for you. In order to keep our
          resources free, we, Marketing VF Ltd (trading as
          “GoWizard”), may accept advertising compensation from
          some of the companies advertised or listed (“Brand
          Partners”). Such compensation may impact the location
          and order in which these Brand Partners (and/or their
          products) are presented. We may also list companies
          who are not our Brand Partners. If this is the case,
          we will be providing you with an independent review of
          the company’s products or services. This site does not
          feature all providers on the market.
        </p>
      </div>
    </div>
  );
}

function Label42() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Label"
    >
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#db0064] text-[14px] text-nowrap underline whitespace-pre">
        Read more
      </p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="chevron-right"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chevron-right">
          <path
            d={svgPaths.p13515e00}
            fill="var(--fill-0, #DB0064)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 transition-transform group-hover:translate-x-1 duration-200"
      data-name="Icon"
    >
      <ChevronRight />
    </div>
  );
}

function LinkCore() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer group"
      data-name=".🔒link-core"
    >
      <Label42 />
      <Icon29 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 link"
    >
      <LinkCore />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full"
      data-name="Link"
    >
      <Link />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[16px] items-start p-[40px] relative rounded-[12px] shrink-0 w-[728px] md:max-[820px]:w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-zinc-100 inset-0 pointer-events-none rounded-[12px]"
      />
      <Header16 />
      <Container41 />
      <Link1 />
    </div>
  );
}

function Hr4() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="<hr>"
    >
      <div className="size-full">
        <div className="h-px w-full" />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#eeeeef] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Hr5() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[1192px] min-w-[272px] relative shrink-0 w-[728px]"
      data-name="<hr>"
    >
      <Hr4 />
    </div>
  );
}

function Label43() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Label"
    >
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#db0064] text-[14px] text-nowrap underline whitespace-pre">
        Privacy Policy
      </p>
    </div>
  );
}

function LinkCore1() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer"
      data-name=".🔒link-core"
    >
      <Label43 />
    </div>
  );
}

function Link2() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 link"
    >
      <LinkCore1 />
    </div>
  );
}

function Label44() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Label"
    >
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#db0064] text-[14px] text-nowrap underline whitespace-pre">
        Your Privacy Choices
      </p>
    </div>
  );
}

function LinkCore2() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer"
      data-name=".🔒link-core"
    >
      <Label44 />
    </div>
  );
}

function Link3() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 link"
    >
      <LinkCore2 />
    </div>
  );
}

function Label45() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Label"
    >
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#db0064] text-[14px] text-nowrap underline whitespace-pre">
        Terms of Use
      </p>
    </div>
  );
}

function LinkCore3() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer"
      data-name=".🔒link-core"
    >
      <Label45 />
    </div>
  );
}

function Link4() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="🟢 link"
    >
      <LinkCore3 />
    </div>
  );
}

function MenuItems() {
  return (
    <div
      className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0"
      data-name="Menu items"
    >
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Copyright() {
  return (
    <div
      className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[308px]"
      data-name="Copyright"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[14px] text-right">
        <p className="leading-[24px]">
          © 2025 Marketing VF Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <MenuItems />
      <Copyright />
    </div>
  );
}

function RegisteredOffice() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Registered office"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[#565660] text-[14px] text-center">
        <p className="leading-[24px]">
          US Office: WeWork 801 Barton Springs Austin TX 78704
          United States
          <br aria-hidden="true" />
          {`Registered Office: 1st & 2nd Floors, Wenlock Works, 1A Shepherdess Walk, London, N1 7QE, United Kingdom. Registered in England & Wales (no. 06951544)`}
        </p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container43 />
      <RegisteredOffice />
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-[728px] md:max-[820px]:w-full"
      data-name="Footer"
    >
      <Hr5 />
      <Container44 />
    </footer>
  );
}

function Container45() {
  return (
    <section
      className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[728px] md:max-[820px]:w-[672px] md:max-[820px]:px-[0px] p-[0px]"
      data-name="Container"
    >
      <Hr3 />
      <Container40 />
      <Container42 />
      <Footer />
    </section>
  );
}

function Section() {
  return (
    <main
      className="bg-white relative shrink-0 w-full"
      data-name="Section"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] md:gap-[80px] lg:gap-[104px] items-center md:pb-[64px] lg:pb-[80px] md:pt-[32px] lg:pt-[40px] px-[24px] md:px-[48px] lg:px-[104px] relative w-full pt-[32px] pr-[48px] pb-[64px] pl-[48px]">
          <Container4 />
          <Container12 />
          <Container14 />
          <Container19 />
          <Container30 />
          <Container31 />
          <Hr1 />
          <Container39 />
          <Container45 />
        </div>
      </div>
    </main>
  );
}

export default function Component1440Homepage() {
  return (
    <div
      className="bg-white relative rounded-[8px] w-full"
      data-name="@1440-homepage"
    >
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Navigation />
        <Section />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c6c6c9] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}