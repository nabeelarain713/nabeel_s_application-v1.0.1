import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";

const WritealyPage = () => {
  return (
    <>
      <div className="bg-deep_orange-50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="h-[67px] ml-8 md:ml-[0] md:mt-0 mt-[18px] w-[66px]"
              src="images/img_footerlogosvg.svg"
              alt="footerlogosvg"
            />
            <Text
              className="mb-3 ml-1.5 md:ml-[0] md:mt-0 mt-[33px] sm:text-[22.41px] md:text-[24.41px] text-[26.41px] text-center text-indigo-900"
              size="txtPoppinsSemiBold2641"
            >
              Writealy
            </Text>
            <div className="flex md:ml-[0] ml-[527px] mr-[123px] relative w-[642px] md:w-full">
              <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-start my-auto w-[83%] common-row-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[13px]">
                      <Text
                        className="mb-[19px] mt-[15px] text-[14.48px] text-black-900 text-center"
                        size="txtPoppinsSemiBold1448"
                      >
                        Product
                      </Text>
                      <div className="border-black-900 border-solid border-t-4 border-x-4 h-1 w-[11%]"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row items-center justify-start p-3.5">
                      <Text
                        className="mb-[18px] mt-[15px] text-[14.48px] text-black-900 text-center"
                        size="txtPoppinsSemiBold1448"
                      >
                        Use cases
                      </Text>
                      <div className="border-black-900 border-solid border-t-4 border-x-4 h-1 ml-1 w-[9%]"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="ml-3.5 text-[14.48px] text-black-900 text-center"
                  >
                    <Text size="txtPoppinsSemiBold1448">Pricing</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="ml-[30px] text-[14.48px] text-black-900 text-center"
                  >
                    <Text size="txtPoppinsSemiBold1448">Customers</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-[5px] items-center justify-start ml-[15px] p-[13px]">
                      <Text
                        className="mb-[19px] mt-4 text-[14.48px] text-black-900 text-center"
                        size="txtPoppinsSemiBold1448"
                      >
                        Resources
                      </Text>
                      <div className="border-black-900 border-solid border-t-4 border-x-4 h-1 w-[9%]"></div>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="flex flex-col items-end justify-start ml-[-6.21px] my-auto sm:pl-5 pl-[21.72px] pr-[6.21px] w-auto z-[1]">
                <Button
                  className="cursor-pointer font-semibold min-w-[88px] rounded-[23px] text-[14.48px] text-center"
                  color="black_900"
                  variant="outline"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1170px] mt-[72px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
              <Text
                className="leading-[72.00px] md:text-5xl text-7xl text-gray-900 w-[76%] sm:w-full"
                size="txtInterRegular72"
              >
                Brainstorm your book easily.
              </Text>
              <Text
                className="leading-[36.00px] mt-2.5 text-gray-800 text-xl w-[71%] sm:w-full"
                size="txtPoppinsRegular20"
              >
                World-class companies use Writealy AI writing platform to unlock
                brainstorming for publishing a book.
              </Text>
              <div className="flex sm:flex-col flex-row font-poppins gap-3 items-start justify-start mt-4 w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[213px] text-center text-xl"
                  shape="round"
                  color="black_900"
                  size="lg"
                  variant="outline"
                >
                  Request a demo
                </Button>
                <Button
                  className="border-2 border-black-900 border-solid cursor-pointer font-semibold min-w-[213px] text-center text-xl"
                  shape="round"
                  color="red_300"
                  size="lg"
                >
                  Try for free
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 justify-start pb-[17px] w-[54%] md:w-full">
              <div className="h-[354px] relative rounded-[18px] w-full">
                <Img
                  className="h-[354px] m-auto object-cover rounded-[18px] w-full"
                  src="images/img_mainvideoimgjpg.png"
                  alt="mainvideoimgjpg"
                />
                <div className="absolute bg-black-900 h-[87px] inset-[0] justify-center m-auto rounded-[43px] w-[87px]"></div>
              </div>
              <Text
                className="md:ml-[0] ml-[164px] text-black-900 text-center text-xl"
                size="txtPoppinsMedium20"
              >
                <span className="text-black-900 font-poppins font-medium">
                  Watch the product overview{" "}
                </span>
                <span className="text-gray-600 font-poppins text-sm font-medium">
                  3 min
                </span>
              </Text>
            </div>
          </div>
          <div className="md:h-[1044px] h-[387px] sm:h-[443px] mt-[67px] md:px-5 relative w-full">
            <div className="bg-red-300 h-[376px] m-auto w-full"></div>
            <div className="absolute flex flex-col gap-11 h-max inset-[0] items-center justify-center m-auto w-[82%]">
              <div className="flex md:flex-col flex-row gap-3 items-start justify-start md:pr-10 sm:pr-5 pr-[67.27px] w-auto md:w-full">
                <Text
                  className="sm:text-[18.94px] md:text-[20.94px] text-[22.94px] text-blue_gray-900 text-center w-auto"
                  size="txtPoppinsMedium2294"
                >
                  The world’s most effective content teams use Writer
                </Text>
                <div className="bg-gray-100 flex flex-col h-[55px] items-center justify-start rounded-[27px] w-[55px]">
                  <Img
                    className="h-[55px] rounded-tl-[27px] rounded-tr-[27px] w-[55px]"
                    src="images/img_aafter.svg"
                    alt="aafter_Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                <Img
                  className="h-[55px] w-[1239px]"
                  src="images/img_div.svg"
                  alt="div_One"
                />
                <Img
                  className="h-[55px]"
                  src="images/img_div_black_900.svg"
                  alt="div_Two"
                />
                <div className="relative w-[1239px] md:w-full">
                  <div className="flex flex-col items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                      <Img
                        className="h-[55px]"
                        src="images/img_p36svg.svg"
                        alt="p36svg"
                      />
                      <Img
                        className="h-[55px]"
                        src="images/img_p37svg.svg"
                        alt="p37svg"
                      />
                      <Img
                        className="h-[55px]"
                        src="images/img_p38svg.svg"
                        alt="p38svg"
                      />
                      <Img
                        className="h-[55px]"
                        src="images/img_p39svg.svg"
                        alt="p39svg"
                      />
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[12%] md:w-full">
                        <div className="flex flex-col items-center justify-end p-2 w-full">
                          <Img
                            className="h-9 md:h-auto object-cover w-[86%]"
                            src="images/img_maskgroup.png"
                            alt="maskgroup"
                          />
                        </div>
                      </div>
                      <Img
                        className="h-[55px]"
                        src="images/img_p42svg.svg"
                        alt="p42svg"
                      />
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[12%] md:w-full">
                        <div className="flex flex-col items-center justify-start p-[19px] w-full">
                          <Img
                            className="h-4 md:h-auto object-cover w-full"
                            src="images/img_maskgroup_16x104.png"
                            alt="maskgroup_One"
                          />
                        </div>
                      </div>
                      <Img
                        className="h-[55px]"
                        src="images/img_p30svg.svg"
                        alt="p30svg"
                      />
                      <Img
                        className="h-[55px]"
                        src="images/img_p31svg.svg"
                        alt="p31svg"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-gradient  h-[55px] inset-y-[0] left-[0] my-auto w-[13%]"></div>
                  <div className="absolute bg-gradient1  h-[55px] inset-y-[0] my-auto right-[0] w-[13%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[42px] items-center justify-start max-w-[1080px] mt-[74px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_02"
              size="txtPoppinsSemiBold40"
            >
              People who has published their books using writealy
            </Text>
            <div className="flex flex-col items-center justify-start pb-[15px] px-[15px] w-full">
              <div className="flex flex-col items-center justify-start mb-[15px] w-full">
                <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start pb-5 pl-5 rounded-lg shadow-bs w-full">
                    <div className="flex flex-col relative w-full">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                          <Img
                            className="h-10 mt-5"
                            src="images/img_div_black_900_40x122.svg"
                            alt="div"
                          />
                          <div className="flex flex-col items-center justify-start rounded-tr-lg">
                            <Img
                              className="h-[129px] md:h-auto object-cover rounded-tr-lg w-full"
                              src="images/img_person1png.png"
                              alt="person1png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end mt-[-109px] pr-[17px] py-[17px] z-[1]">
                        <Text
                          className="mt-[46px] md:text-5xl text-6xl text-gray-900_03"
                          size="txtPoppinsRegular60"
                        >
                          2x
                        </Text>
                        <Text
                          className="leading-[31.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[81%] sm:w-full"
                          size="txtPoppinsMedium24"
                        >
                          Increase in search traffic in 4 weeks
                        </Text>
                        <Text
                          className="leading-[26.00px] mb-[17px] mt-2.5 text-[15px] text-gray-800 w-full"
                          size="txtPoppinsRegular15"
                        >
                          “No other competitors were able to mimic our voice and
                          tone like Writer. With it, we increased our
                          publication cadence dramatically.”
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[166px] py-[5px] w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        <span className="text-black-900 font-poppins text-left font-semibold">
                          <>
                            Ty Magnin
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-poppins text-left font-normal">
                          VP of Marketing
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start pb-5 pl-5 rounded-lg shadow-bs w-full">
                    <div className="flex flex-col relative w-full">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                          <Img
                            className="h-10 mt-5"
                            src="images/img_div_40x122.svg"
                            alt="div"
                          />
                          <div className="flex flex-col items-center justify-start rounded-tr-lg">
                            <Img
                              className="h-[129px] md:h-auto object-cover rounded-tr-lg w-full"
                              src="images/img_person2png.png"
                              alt="person2png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end mt-[-109px] pr-[9px] py-[9px] z-[1]">
                        <Text
                          className="mt-[55px] md:text-5xl text-6xl text-gray-900_03"
                          size="txtPoppinsRegular60"
                        >
                          18x
                        </Text>
                        <Text
                          className="leading-[31.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[56%] sm:w-full"
                          size="txtPoppinsMedium24"
                        >
                          ROI on Writer investment
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-2.5 text-[15px] text-gray-800 w-[95%] sm:w-full"
                          size="txtPoppinsRegular15"
                        >
                          “Having AI write some stuff under good guidance and
                          under good frameworks frees us up to write the really
                          important stuff. We’ve had an incredible ROI with
                          Writer.”
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-1 w-[94%] md:w-full">
                      <Text
                        className="leading-[24.00px] mb-0.5 text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        <span className="text-black-900 font-poppins text-left font-semibold">
                          <>
                            Tina O’Shea
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-poppins text-left font-normal">
                          Director, Content Design
                        </span>
                      </Text>
                      <Img
                        className="h-12 w-12"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start pb-5 pl-5 rounded-lg shadow-bs w-full">
                    <div className="flex flex-col relative w-full">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                          <Img
                            className="h-10 mt-5"
                            src="images/img_div_gray_800_01.svg"
                            alt="div"
                          />
                          <div className="flex flex-col items-center justify-start rounded-tr-lg">
                            <Img
                              className="h-[129px] md:h-auto object-cover rounded-tr-lg w-full"
                              src="images/img_person3png.png"
                              alt="person3png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center mt-[-109px] pr-[5px] py-[5px] z-[1]">
                        <Text
                          className="mt-[58px] md:text-5xl text-6xl text-gray-900_03"
                          size="txtPoppinsRegular60"
                        >
                          5x
                        </Text>
                        <Text
                          className="leading-[31.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[64%] sm:w-full"
                          size="txtPoppinsMedium24"
                        >
                          Increase in content output
                        </Text>
                        <Text
                          className="leading-[26.00px] mb-[3px] mt-2.5 text-[15px] text-gray-800 w-full"
                          size="txtPoppinsRegular15"
                        >
                          “A tool like Writer is exactly what we needed. It
                          empowers our authors to get writing suggestions on the
                          fly, and it doesn’t require them to remember all of
                          these rules.”
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-1 w-[94%] md:w-full">
                      <Text
                        className="leading-[24.00px] mb-0.5 text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        <span className="text-black-900 font-poppins text-left font-semibold">
                          <>
                            Karl Gabbey
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-poppins text-left font-normal">
                          Head of Knowledge
                        </span>
                      </Text>
                      <Img
                        className="h-12 w-12"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 md:h-[267px] h-[477px] pb-5 pl-5 relative rounded-lg shadow-bs w-full">
                    <div className="absolute flex flex-col right-[0] top-[0] w-[94%]">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                          <Img
                            className="h-10 mt-5"
                            src="images/img_div_1.svg"
                            alt="div"
                          />
                          <div className="flex flex-col items-center justify-start rounded-tr-lg">
                            <Img
                              className="h-[129px] md:h-auto object-cover rounded-tr-lg w-full"
                              src="images/img_person4png.png"
                              alt="person4png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center mt-[-109px] pr-1.5 py-1.5 z-[1]">
                        <Text
                          className="mt-[58px] md:text-5xl text-6xl text-gray-900_03"
                          size="txtPoppinsRegular60"
                        >
                          100%
                        </Text>
                        <Text
                          className="leading-[31.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtPoppinsMedium24"
                        >
                          <>
                            Brand <br />
                            compliance
                          </>
                        </Text>
                        <Text
                          className="leading-[26.00px] mb-0.5 mt-2.5 text-[15px] text-gray-800 w-full"
                          size="txtPoppinsRegular15"
                        >
                          <>
                            “As our company quickly grew, Writer helped us scale
                            content without sacrificing our brand voice. It
                            would have taken us hundreds of hours of copyediting
                            cycles to do what we can do with Writer
                            automatically.&quot;
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[105px] py-[5px] w-auto">
                      <Text
                        className="leading-[24.00px] text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        <span className="text-black-900 font-poppins text-left font-semibold">
                          <>
                            Brooke Burdge
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-poppins text-left font-normal">
                          SVP of Brand Marketing
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 md:h-[267px] h-[477px] pb-5 pl-5 relative rounded-lg shadow-bs w-full">
                    <div className="absolute flex flex-col right-[0] top-[0] w-[94%]">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                          <Img
                            className="h-10 mt-5"
                            src="images/img_div_2.svg"
                            alt="div"
                          />
                          <div className="flex flex-col items-center justify-start rounded-tr-lg">
                            <Img
                              className="h-[129px] md:h-auto object-cover rounded-tr-lg w-full"
                              src="images/img_person5png.png"
                              alt="person5png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end mt-[-109px] pr-[9px] py-[9px] z-[1]">
                        <Text
                          className="mt-[55px] md:text-5xl text-6xl text-gray-900_03"
                          size="txtPoppinsRegular60"
                        >
                          23%
                        </Text>
                        <Text
                          className="leading-[31.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[71%] sm:w-full"
                          size="txtPoppinsMedium24"
                        >
                          Increase in CTRs with better copy
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-[9px] text-[15px] text-gray-800 w-full"
                          size="txtPoppinsRegular15"
                        >
                          “Writer solves real business problems for us, and it
                          was the only AI tool we tried that could do so. It
                          really did deliver on the promise of freeing up our
                          writers to work on creative strategy.”
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[4%] flex flex-row inset-x-[0] items-center justify-between mx-auto py-1 w-[88%]">
                      <Text
                        className="leading-[24.00px] mb-0.5 text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        <span className="text-black-900 font-poppins text-left font-semibold">
                          <>
                            Ranjan Roy
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-poppins text-left font-normal">
                          VP of Strategy
                        </span>
                      </Text>
                      <Img
                        className="h-12 w-12"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 md:h-[266px] h-[477px] pb-5 pl-5 relative rounded-lg shadow-bs w-full">
                    <div className="absolute flex flex-col right-[0] top-[0] w-[94%]">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-row gap-[38px] items-start justify-between w-full">
                          <Img
                            className="h-10 mt-5"
                            src="images/img_div_3.svg"
                            alt="div"
                          />
                          <div className="flex flex-col items-center justify-start rounded-tr-lg">
                            <Img
                              className="h-[129px] md:h-auto object-cover rounded-tr-lg w-full"
                              src="images/img_person6png.png"
                              alt="person6png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center mt-[-109px] pr-2 py-2 z-[1]">
                        <Text
                          className="mt-[55px] md:text-5xl text-6xl text-gray-900_03"
                          size="txtPoppinsRegular60"
                        >
                          70%
                        </Text>
                        <Text
                          className="leading-[31.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[54%] sm:w-full"
                          size="txtPoppinsMedium24"
                        >
                          Reduction in editing time
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-2.5 text-[15px] text-gray-800 w-full"
                          size="txtPoppinsRegular15"
                        >
                          “Being able to present a tool that could literally pay
                          for itself in the amount of time that it was saving
                          our team and our editors, even by a very conservative
                          estimate — it was a no-brainer.”
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[4%] flex flex-row inset-x-[0] items-center justify-between mx-auto py-1 w-[88%]">
                      <Text
                        className="leading-[24.00px] mb-0.5 text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        <span className="text-black-900 font-poppins text-left font-semibold">
                          <>
                            Deedi Brown
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-poppins text-left font-normal">
                          Senior Editor
                        </span>
                      </Text>
                      <Img
                        className="h-12 w-12"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 flex flex-col items-center justify-start mt-[39px] p-[30px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1080px] mb-[19px] mx-auto md:px-5 px-[15px] w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start md:px-10 sm:px-5 px-[470px] w-full">
                <Img
                  className="h-[27px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
                <Text
                  className="text-black-900 text-center text-sm tracking-[4.20px] uppercase"
                  size="txtPoppinsSemiBold14"
                >
                  USE CASES
                </Text>
              </div>
              <Text
                className="mt-7 sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_02"
                size="txtPoppinsSemiBold40"
              >
                Automate what’s automatable in content
              </Text>
              <div className="md:h-[102px] h-[82px] mt-5 relative w-[51%] sm:w-full">
                <div className="absolute h-[82px] inset-[0] justify-center m-auto w-full">
                  <Text
                    className="leading-[41.00px] m-auto sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-900 text-center"
                    size="txtPoppinsRegular23"
                  >
                    <>
                      Writer accelerates your writing workflow, from <br />
                      Ideation
                    </>
                  </Text>
                  <div className="absolute bottom-[0] flex flex-row items-center justify-start left-[14%] w-[52%]">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-900 text-center"
                      size="txtPoppinsRegular23"
                    >
                      Writing
                    </Text>
                    <Button
                      className="flex h-5 items-center justify-center mb-[9px] ml-[15px] mt-[5px] w-5"
                      shape="circle"
                      color="black_900"
                      size="xs"
                    >
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        alt="arrowright_One"
                      />
                    </Button>
                    <Button
                      className="flex h-5 items-center justify-center ml-[135px] my-[7px] w-5"
                      shape="circle"
                      color="black_900"
                      size="xs"
                    >
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        alt="arrowright_Two"
                      />
                    </Button>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[0] right-[8%] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-900 text-center"
                  size="txtPoppinsRegular23"
                >
                  Illustrating
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[45px] w-auto md:w-full">
                <div className="h-[440px] relative rounded-[18px] w-3/4 md:w-full">
                  <Img
                    className="h-[440px] m-auto object-cover rounded-[18px] w-full"
                    src="images/img_ideatefasterpng.png"
                    alt="ideatefasterpng"
                  />
                  <div className="absolute bg-black-900 h-[87px] inset-[0] justify-center m-auto rounded-[43px] w-[87px]"></div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start md:pl-10 sm:pl-5 pl-[45px] w-[26%] md:w-full">
                  <div className="gap-[17px] grid grid-cols-2 justify-start min-h-[auto] sm:pl-5 pl-[21px] w-auto">
                    <Line className="bg-black-900 h-[75px] w-full" />
                    <div className="flex flex-col gap-[5.39px] items-start justify-start md:pr-10 sm:pr-5 pr-[44.52px] w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                        size="txtPoppinsMedium22"
                      >
                        Ideate faster
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[155px] md:max-w-full text-black-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Use AI as your brainstorming partner
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-5 pl-[21px] w-full">
                      <div className="flex flex-col gap-[5.39px] items-start justify-start md:pr-10 sm:pr-5 pr-[43.66px] w-auto">
                        <Text
                          className="text-[22px] text-gray-600 sm:text-lg md:text-xl w-auto"
                          size="txtPoppinsMedium22Gray600"
                        >
                          Write faster
                        </Text>
                        <Text
                          className="leading-[22.00px] max-w-[156px] md:max-w-full text-gray-600 text-sm"
                          size="txtPoppinsRegular14Gray600"
                        >
                          Generate first drafts in seconds
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-5 pl-[21px] w-full">
                      <div className="flex flex-col gap-[5.39px] items-start justify-start pr-[16.86px] w-auto">
                        <Text
                          className="text-[22px] text-gray-600 sm:text-lg md:text-xl w-auto"
                          size="txtPoppinsMedium22Gray600"
                        >
                          Edit faster
                        </Text>
                        <Text
                          className="leading-[22.00px] max-w-[183px] md:max-w-full text-gray-600 text-sm"
                          size="txtPoppinsRegular14Gray600"
                        >
                          Automate brand, editorial, and style edits
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pl-5 pl-[21px] w-auto">
                    <div className="flex flex-col gap-[5.39px] items-start justify-start sm:pr-5 pr-[23px] w-auto">
                      <Text
                        className="text-[22px] text-gray-600 sm:text-lg md:text-xl w-auto"
                        size="txtPoppinsMedium22Gray600"
                      >
                        Illustrate faster
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[137px] md:max-w-full text-gray-600 text-sm"
                        size="txtPoppinsRegular14Gray600"
                      >
                        Instantly produce distribution content
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pl-5 pl-[21px] w-auto">
                    <div className="flex flex-col gap-[5.39px] items-start justify-start pr-2.5 w-auto">
                      <Text
                        className="text-[22px] text-gray-600 sm:text-lg md:text-xl w-auto"
                        size="txtPoppinsMedium22Gray600"
                      >
                        Publish faster
                      </Text>
                      <Text
                        className="leading-[22.00px] max-w-[185px] md:max-w-full text-gray-600 text-sm"
                        size="txtPoppinsRegular14Gray600"
                      >
                        Turn a blog post into a case study — or vice versa
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[31px] items-center justify-start max-w-[1080px] mt-[30px] mx-auto px-3.5 md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[4.20px] uppercase"
              size="txtPoppinsSemiBold40Black900"
            >
              BENEFITS
            </Text>
            <div className="flex flex-col items-center justify-start pb-[100px] w-full">
              <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
                <List
                  className="flex flex-col gap-[100px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                    <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-1/2 md:w-full">
                      <Text
                        className="leading-[43.00px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_03 w-[71%] sm:w-full"
                        size="txtPoppinsRegular36"
                      >
                        Create content in minutes, not months
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray-800 text-lg w-[83%] sm:w-full"
                        size="txtPoppinsRegular18"
                      >
                        Create original content that actually sounds like your
                        company wrote it.
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray-800 text-lg w-[82%] sm:w-full"
                        size="txtPoppinsRegular18"
                      >
                        Writer is the only AI writing platform that can be
                        trained on your own best-performing content and brand
                        guidelines.
                      </Text>
                      <div className="md:h-[49px] h-[65px] pr-1 relative w-[86%] sm:w-full">
                        <Text
                          className="mt-[3px] text-gray-800 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          It’s
                        </Text>
                        <div className="absolute md:h-[49px] h-[65px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start left-[6%] top-[0] w-auto"
                            style={{
                              backgroundImage: "url('images/img_mark.svg')",
                            }}
                          >
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtPoppinsSemiBold18"
                            >
                              your own AI,
                            </Text>
                          </div>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] leading-[32.00px] mx-auto text-gray-800 text-lg w-full"
                            size="txtPoppinsRegular18"
                          >
                            specifically tuned for your team’s unique use cases.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                      <Img
                        className="h-[468px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_img12xjpg.png"
                        alt="img12xjpg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                    <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-1/2 md:w-full">
                      <Text
                        className="leading-[43.00px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_03 w-[85%] sm:w-full"
                        size="txtPoppinsRegular36"
                      >
                        Build a brand that is consistent — everywhere
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray-800 text-lg w-[81%] sm:w-full"
                        size="txtPoppinsRegular18"
                      >
                        Generic ad copy. Outdated messaging on your website.
                        Poorly-written docs.
                      </Text>
                      <div className="md:h-16 h-32 pr-3.5 relative w-[86%] sm:w-full">
                        <div className="absolute md:h-16 h-[109px] left-[0] top-[0] w-[96%] sm:w-full">
                          <Text
                            className="absolute inset-x-[0] leading-[32.00px] mx-auto text-gray-800 text-lg top-[0] w-full"
                            size="txtPoppinsRegular18"
                          >
                            All of this can kill a buyer’s journey — and your
                            brand. Writer gives you all the tools you need to
                          </Text>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[49px] items-center justify-start left-[0] w-auto"
                            style={{
                              backgroundImage: "url('images/img_mark.svg')",
                            }}
                          >
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtPoppinsSemiBold18"
                            >
                              build a consistent brand
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[32.00px] mx-auto text-gray-800 text-lg w-[97%] sm:w-full"
                          size="txtPoppinsRegular18"
                        >
                          across every customer touchpoint, and do it
                          efficiently.
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                      <Img
                        className="h-[468px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_img22xjpg.png"
                        alt="img22xjpg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
                      <Text
                        className="leading-[43.00px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_03 w-[62%] sm:w-full"
                        size="txtPoppinsRegular36"
                      >
                        Drive revenue, not review cycles
                      </Text>
                      <Text
                        className="leading-[32.00px] mt-[17px] text-gray-800 text-lg w-[74%] sm:w-full"
                        size="txtPoppinsRegular18"
                      >
                        ‘Let’s be a media company,’ they say — but without the
                        required headcount or budget.
                      </Text>
                      <Text
                        className="mt-[21px] text-gray-800 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        Do it anyway.
                      </Text>
                      <div className="md:h-36 h-[130px] mt-4 sm:pr-5 pr-[22px] relative w-[86%] sm:w-full">
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[45px] items-center justify-start left-[0] top-[0] w-auto"
                          style={{
                            backgroundImage: "url('images/img_mark.svg')",
                          }}
                        >
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            10x the productivity
                          </Text>
                        </div>
                        <Text
                          className="absolute h-max inset-y-[0] leading-[32.00px] left-[0] my-auto text-gray-800 text-lg w-[95%] sm:w-full"
                          size="txtPoppinsRegular18"
                        >
                          of your best writers, and make it so everyone else in
                          the company can contribute on-brand content, too —
                          without the rewrites.
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                      <Img
                        className="h-[468px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_img32xjpg.png"
                        alt="img32xjpg"
                      />
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
                    <Text
                      className="leading-[43.00px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_03 w-[65%] sm:w-full"
                      size="txtPoppinsRegular36"
                    >
                      Be secure with enterprise features
                    </Text>
                    <Text
                      className="mt-5 text-gray-800 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      What you write will never make it into our models.
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[19px] text-gray-800 text-lg w-[83%] sm:w-full"
                      size="txtPoppinsRegular18"
                    >
                      Your data is analyzed transiently, so what you edit or
                      generate isn’t collected or used by Writer.
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[18px] text-gray-800 text-lg w-[78%] sm:w-full"
                      size="txtPoppinsRegular18"
                    >
                      Writer is the only AI writing platform that both users and
                      infosec teams love.
                    </Text>
                    <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[31px] pr-[19px] py-[19px] rounded-lg shadow-bs w-[86%] md:w-full">
                      <Img
                        className="h-[67px]"
                        src="images/img_div_blue_50.svg"
                        alt="div_Four"
                      />
                      <Img
                        className="h-[67px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                      <div className="border-blue-50 border-r border-solid flex flex-col items-center justify-start p-3.5 w-[21%] sm:w-full">
                        <Img
                          className="h-[38px]"
                          src="images/img_wsvg.svg"
                          alt="wsvg"
                        />
                      </div>
                      <div className="border-blue-50 border-r border-solid flex flex-col items-center justify-start p-3 w-[21%] sm:w-full">
                        <Img
                          className="h-[42px] md:h-auto object-cover w-[42px]"
                          src="images/img_aicpapng.png"
                          alt="aicpapng"
                        />
                      </div>
                      <Img
                        className="h-8 md:h-auto sm:ml-[0] ml-[19px] object-cover w-[12%] sm:w-full"
                        src="images/img_pcipng.png"
                        alt="pcipng"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                    <Img
                      className="h-[468px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                      src="images/img_img42xjpg.png"
                      alt="img42xjpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col items-start justify-start mt-[70px] md:px-10 sm:px-5 px-[181px] py-[100px] w-auto md:w-full">
            <div className="flex flex-col items-center justify-start max-w-[1150px] mx-auto px-[15px] w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start md:px-10 sm:px-5 px-[511px] w-full">
                <Img
                  className="h-9 w-9"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="text-black-900 text-center text-sm tracking-[4.20px] uppercase"
                  size="txtPoppinsSemiBold14"
                >
                  wRITEALY
                </Text>
              </div>
              <Text
                className="leading-[52.00px] mt-[27px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_02 w-[59%] sm:w-full"
                size="txtPoppinsSemiBold40"
              >
                The only brainstorming solution that lives up to the hype
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[45px] w-auto md:w-full">
                <div className="md:h-[62px] h-[65px] pb-[19px] relative w-56">
                  <div className="absolute border-b-4 border-black-900 border-solid bottom-[0] h-[62px] inset-x-[0] mx-auto w-full"></div>
                  <div className="absolute flex flex-row gap-[58px] inset-x-[0] items-center justify-start mx-auto md:pr-10 sm:pr-5 pr-[59px] top-[0] w-full">
                    <Line className="bg-black-900_19 h-[46px] my-0.5 w-px" />
                    <Text
                      className="sm:flex-1 leading-[23.00px] text-black-900 text-center text-xl w-[64%] sm:w-full"
                      size="txtPoppinsMedium20"
                    >
                      Content marketing
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-14 items-center justify-start md:pr-10 pr-14 sm:pr-5 w-full">
                    <Line className="bg-black-900_19 h-[46px] my-0.5 w-px" />
                    <Text
                      className="sm:flex-1 leading-[23.00px] text-center text-gray-800 text-xl w-[66%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      Demand generation
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[59px] items-center justify-center md:pr-10 sm:pr-5 pr-[60px] w-full">
                    <Line className="bg-black-900_19 h-[46px] my-0.5 w-px" />
                    <Text
                      className="sm:flex-1 leading-[23.00px] text-center text-gray-800 text-xl w-[63%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      Product marketing
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[59px] items-center justify-center md:pr-10 sm:pr-5 pr-[60px] w-full">
                    <Line className="bg-black-900_19 h-[46px] my-0.5 w-px" />
                    <Text
                      className="sm:flex-1 leading-[23.00px] text-center text-gray-800 text-xl w-[63%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      Brand marketing
                    </Text>
                  </div>
                </List>
                <div className="flex flex-row items-center justify-between w-1/5 md:w-full">
                  <Line className="bg-black-900_19 h-[46px] my-0.5 w-px" />
                  <Text
                    className="leading-[23.00px] text-center text-gray-800 text-xl"
                    size="txtPoppinsRegular20"
                  >
                    Content design
                  </Text>
                  <Line className="bg-black-900_19 h-[46px] my-0.5 w-px" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-9 items-start justify-between mt-[41px] w-full">
                <div className="h-[510px] md:h-[886px] relative w-3/4 md:w-full">
                  <div className="h-[510px] m-auto w-full">
                    <div className="absolute bg-white-A700 h-[486px] inset-y-[0] left-[0] my-auto rounded-bl-[12px] rounded-tl-[12px] w-1/2"></div>
                    <div className="absolute bg-white-A700 h-[510px] inset-y-[0] my-auto right-[0] rounded-[12px] shadow-bs1 w-[52%]"></div>
                  </div>
                  <div className="absolute flex flex-col gap-[34px] h-max inset-[0] items-center justify-center m-auto w-[98%]">
                    <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start px-[15px] w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start w-[49%] md:w-full">
                        <div className="flex flex-col gap-[26px] items-start justify-start w-[88%] md:w-full">
                          <Text
                            className="text-black-900 text-lg tracking-[3.60px] uppercase"
                            size="txtPoppinsMedium18"
                          >
                            WITHOUT WRITER
                          </Text>
                          <div className="flex flex-row gap-5 items-center justify-start w-full">
                            <Button
                              className="flex h-8 items-center justify-center my-3.5 rounded-[50%] w-8"
                              shape="circle"
                            >
                              <Img
                                className="h-3"
                                src="images/img_arrowdown.svg"
                                alt="arrowdown"
                              />
                            </Button>
                            <Text
                              className="sm:flex-1 leading-[30.00px] text-base text-black-900 w-[85%] sm:w-full"
                              size="txtPoppinsRegular16"
                            >
                              Insurmountable backlog of content requests from
                              partner teams
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] md:w-full">
                        <div className="flex flex-col gap-[26px] items-start justify-start w-[88%] md:w-full">
                          <Text
                            className="text-black-900 text-lg tracking-[3.60px] uppercase"
                            size="txtPoppinsMedium18"
                          >
                            WITH WRITER
                          </Text>
                          <div className="flex flex-row gap-5 items-center justify-start w-full">
                            <Button
                              className="flex h-8 items-center justify-center my-3.5 rounded-[50%] w-8"
                              shape="circle"
                              color="teal_A100"
                              size="sm"
                            >
                              <Img
                                src="images/img_checkmark.svg"
                                alt="checkmark"
                              />
                            </Button>
                            <Text
                              className="sm:flex-1 leading-[30.00px] text-base text-black-900 w-[85%] sm:w-full"
                              size="txtPoppinsRegular16"
                            >
                              Accelerated content creation with faster first
                              drafts and editing cycles
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-9 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-start justify-start px-[15px] w-auto md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[52px] w-[49%] md:w-full">
                          <Button
                            className="flex h-8 items-center justify-center my-3.5 rounded-[50%] w-8"
                            shape="circle"
                          >
                            <Img
                              className="h-3"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                          </Button>
                          <Text
                            className="leading-[30.00px] text-base text-black-900 w-[84%] sm:w-full"
                            size="txtPoppinsRegular16"
                          >
                            No bandwidth for content strategy and creative
                            writing
                          </Text>
                        </div>
                        <div className="flex flex-row gap-5 items-center justify-center sm:pr-5 pr-[37px] w-[49%] md:w-full">
                          <Button
                            className="flex h-8 items-center justify-center my-3.5 rounded-[50%] w-8"
                            shape="circle"
                            color="teal_A100"
                            size="sm"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Text
                            className="leading-[30.00px] text-base text-black-900 w-[85%] sm:w-full"
                            size="txtPoppinsRegular16"
                          >
                            Limited time spent editing off-brand and poorly
                            written content
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-start justify-start px-[15px] w-auto md:w-full">
                        <div className="flex flex-row gap-5 items-start justify-start sm:pr-5 pr-8 w-auto sm:w-full">
                          <Button
                            className="flex h-8 items-center justify-center rounded-[50%] w-8"
                            shape="circle"
                          >
                            <Img
                              className="h-3"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                          </Button>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            8 weeks to produce an SEO blog post
                          </Text>
                        </div>
                        <div className="flex flex-row gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[111px] w-auto sm:w-full">
                          <Button
                            className="flex h-8 items-center justify-center rounded-[50%] w-8"
                            shape="circle"
                            color="teal_A100"
                            size="sm"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Daily SEO posts on the blog
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-start justify-start px-[15px] w-auto md:w-full">
                        <div className="flex flex-row gap-5 items-start justify-start sm:pr-5 pr-[26px] w-auto sm:w-full">
                          <Button
                            className="flex h-8 items-center justify-center rounded-[50%] w-8"
                            shape="circle"
                          >
                            <Img
                              className="h-3"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                          </Button>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Short shelf-life for new content pieces
                          </Text>
                        </div>
                        <div className="flex flex-row gap-5 items-start justify-start sm:pr-5 pr-[39px] w-auto sm:w-full">
                          <Button
                            className="flex h-8 items-center justify-center rounded-[50%] w-8"
                            shape="circle"
                            color="teal_A100"
                            size="sm"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Easy repurposing of existing content
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-start justify-start px-[15px] w-auto md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[41px] w-[49%] md:w-full">
                          <Button
                            className="flex h-8 items-center justify-center my-3.5 rounded-[50%] w-8"
                            shape="circle"
                          >
                            <Img
                              className="h-3"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                          </Button>
                          <Text
                            className="leading-[30.00px] text-base text-black-900 w-[85%] sm:w-full"
                            size="txtPoppinsRegular16"
                          >
                            Distractions due to adhoc copy and edit requests
                          </Text>
                        </div>
                        <div className="flex flex-row gap-5 items-center justify-center sm:pr-5 pr-[31px] w-[49%] md:w-full">
                          <Button
                            className="flex h-8 items-center justify-center my-3.5 rounded-[50%] w-8"
                            shape="circle"
                            color="teal_A100"
                            size="sm"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Text
                            className="leading-[30.00px] text-base text-black-900 w-[85%] sm:w-full"
                            size="txtPoppinsRegular16"
                          >
                            Colleagues editing their own work for brand voice,
                            style, and terminology
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter gap-3.5 items-start justify-start w-[22%] md:w-full">
                  <Img
                    className="h-[222px] md:h-auto object-cover w-[78%]"
                    src="images/img_katepng.png"
                    alt="katepng"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[27.00px] text-base text-black-900 w-[88%] sm:w-full"
                      size="txtInterRegular16"
                    >
                      “I’ve been fascinated by the way that CoWrite is able to
                      write in our brand voice.”
                    </Text>
                    <div className="flex flex-col font-poppins gap-[-1px] items-start justify-start mt-2.5 md:pr-10 pr-24 sm:pr-5 w-auto">
                      <Text
                        className="text-gray-800 text-sm w-auto"
                        size="txtPoppinsMedium14"
                      >
                        Kate McDaniel
                      </Text>
                      <Text
                        className="leading-[21.00px] text-gray-800 text-sm"
                        size="txtPoppinsRegular14Gray800"
                      >
                        <>
                          Blog and Web Editor, <br />
                          Global Content
                        </>
                      </Text>
                    </div>
                    <Img
                      className="h-[37px] mt-3.5"
                      src="images/img_ui20pathsvg.svg"
                      alt="ui20pathsvg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start mx-auto md:px-10 sm:px-5 px-[181px] py-[100px] w-auto md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start px-[15px] w-full">
                <Img
                  className="h-[65px] w-[1120px]"
                  src="images/img_div_black_900_65x1120.svg"
                  alt="div_Five"
                />
                <div className="flex flex-col gap-[22px] items-center justify-start pb-1 px-1">
                  <Text
                    className="leading-[52.00px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_02 w-[66%] sm:w-full"
                    size="txtPoppinsSemiBold40"
                  >
                    Generate, improve, and edit content everywhere you write
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-center text-lg"
                    size="txtPoppinsRegular18Bluegray900"
                  >
                    Writer works everywhere you produce content, copy, and
                    communications
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[47px] items-start justify-start overflow-auto pb-[62px] w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-50_01 flex flex-1 flex-col gap-[25px] justify-end pl-[18px] pt-[18px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[17px] mr-[151px] mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsRegular25"
                    >
                      Figma
                    </Text>
                    <div className="h-[230px] relative w-full">
                      <div className="absolute bg-gray-300 bottom-[0] h-[218px] left-[0] rounded-tl-lg w-[41%]"></div>
                      <Img
                        className="absolute h-[230px] inset-y-[0] my-auto object-cover right-[0] w-[230px]"
                        src="images/img_picfigmapng.png"
                        alt="picfigmapng"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50_01 flex flex-1 flex-col gap-7 justify-end pl-[18px] pt-[18px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[17px] mr-[163px] mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsRegular25"
                    >
                      Word
                    </Text>
                    <div className="h-[230px] relative w-full">
                      <div className="absolute bg-gray-300 bottom-[0] h-[218px] left-[0] rounded-tl-lg w-[41%]"></div>
                      <Img
                        className="absolute h-[230px] inset-y-[0] my-auto object-cover right-[0] w-[230px]"
                        src="images/img_picwordpng.png"
                        alt="picwordpng"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50_01 flex flex-1 flex-col gap-7 justify-end pl-[18px] pt-[18px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[17px] mr-[127px] mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsRegular25"
                    >
                      Chrome
                    </Text>
                    <div className="h-[230px] relative w-full">
                      <div className="absolute bg-gray-300 bottom-[0] h-[218px] left-[0] rounded-tl-lg w-[41%]"></div>
                      <Img
                        className="absolute h-[230px] inset-y-[0] my-auto object-cover right-[0] w-[230px]"
                        src="images/img_picchromepng.png"
                        alt="picchromepng"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50_01 flex flex-1 flex-col gap-[27px] justify-end pl-[18px] pt-[18px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[17px] mr-[148px] mt-[13px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsRegular25"
                    >
                      GDocs
                    </Text>
                    <div className="h-[230px] relative w-full">
                      <div className="absolute bg-gray-300 bottom-[0] h-[218px] left-[0] rounded-tl-lg w-[41%]"></div>
                      <Img
                        className="absolute h-[230px] inset-y-[0] my-auto object-cover right-[0] w-[230px]"
                        src="images/img_picdocspng.png"
                        alt="picdocspng"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50_01 flex flex-1 flex-col gap-7 justify-end pl-[18px] pt-[18px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[17px] mr-[98px] mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsRegular25"
                    >
                      Contentful
                    </Text>
                    <div className="h-[230px] relative w-full">
                      <div className="absolute bg-gray-300 bottom-[0] h-[218px] left-[0] rounded-tl-lg w-[41%]"></div>
                      <Img
                        className="absolute h-[230px] inset-y-[0] my-auto object-cover right-[0] w-[230px]"
                        src="images/img_piccontentfulpng.png"
                        alt="piccontentfulpn"
                      />
                    </div>
                  </div>
                </List>
                <div className="h-3 overflow-hidden relative w-[27%]">
                  <div className="w-full h-full absolute bg-gray_100 rounded-[6px]"></div>
                  <div
                    className="h-full absolute bg-gray_900_02  rounded-[6px]"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col font-inter items-start justify-end mt-[-22.28px] mx-auto p-6 sm:px-5 w-full z-[1]">
              <div className="flex flex-col md:gap-10 gap-[81px] justify-start md:ml-[0] ml-[39px] mt-[13px] w-[86%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterBold40"
                >
                  Contact Us
                </Text>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="bg-white-A700 border border-black-900 border-solid h-20 justify-center pb-[30px] pt-[25px] sm:px-5 px-[35px] rounded-[10px] text-gray-600_01 text-xl w-[476px]"
                      size="txtInterBold20"
                    >
                      Full Name
                    </Text>
                    <Input
                      name="groupSeven"
                      placeholder="Phone"
                      className="font-bold leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-xl w-full"
                      wrapClassName="border border-black-900 border-solid md:flex-1 md:w-full"
                      type="number"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[70px] w-full">
                    <Input
                      name="groupFour"
                      placeholder="Address"
                      className="font-bold leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-xl w-full"
                      wrapClassName="border border-black-900 border-solid md:flex-1 md:w-full"
                      type="text"
                    ></Input>
                    <Input
                      name="groupFour"
                      placeholder="Email"
                      className="font-bold leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-xl w-full"
                      wrapClassName="border border-black-900 border-solid md:flex-1 md:w-full"
                      type="email"
                    ></Input>
                  </div>
                  <TextArea
                    className="bg-white-A700 border border-black-900 border-solid font-bold leading-[normal] mt-[59px] pb-[35px] pt-7 sm:px-5 px-[35px] rounded-[10px] placeholder:text-gray-600_01 text-gray-600_01 text-left text-xl w-full"
                    name="groupFive"
                    placeholder="Description"
                  ></TextArea>
                  <button className="mx-10 btn btn-success btn-lg">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col h-[784px] md:h-auto items-start justify-start md:px-10 sm:px-5 px-[216px] w-auto md:w-full">
            <div className="flex flex-col gap-10 items-center justify-start max-w-[1080px] mx-auto pb-10 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[108px] items-start justify-between py-20 w-auto md:w-full">
                <Img
                  className="h-[83px] w-[82px]"
                  src="images/img_footerlogosvg_white_a700.svg"
                  alt="footerlogosvg_One"
                />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[82%] md:w-full">
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[89px] grid sm:grid-cols-1 grid-cols-2 w-[57%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        Product
                      </Text>
                      <div className="flex flex-col gap-[17.19px] items-start justify-start pb-[9.19px] pt-7 w-auto">
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Security
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Writer for Chrome
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Writer for Contentful
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Writer for Figma
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Grammarly alternative
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Request a demo
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Try for free
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        Resources
                      </Text>
                      <div className="flex flex-col gap-[17.19px] items-start justify-start pb-[9.19px] pt-7 w-auto">
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Blog
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Guides
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Inclusive language
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Style guide template
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Terminology management
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          AI content detector
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Free grammar check
                        </Text>
                      </div>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[89px] grid grid-cols-2 w-[33%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start sm:ml-[0] pb-[148.75px] w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        Company
                      </Text>
                      <div className="flex flex-col gap-[17.19px] items-start justify-start pb-[9.19px] pr-[13.53px] pt-7 w-auto">
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Careers
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Partners
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Contact us
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:ml-[0] pb-[148.75px] w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        Support
                      </Text>
                      <div className="flex flex-col gap-[17.19px] items-start justify-start pb-[9.19px] pt-7 w-auto">
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Help center
                        </Text>
                        <Text
                          className="text-base text-gray-400"
                          size="txtPoppinsRegular16Gray400"
                        >
                          API
                        </Text>
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtPoppinsRegular16Gray400"
                        >
                          Status
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-[15px] w-full">
                <Text
                  className="text-sm text-white-A700 tracking-[4.20px] uppercase"
                  size="txtPoppinsSemiBold14WhiteA700"
                >
                  © 2023 WRITEALY
                </Text>
                <Img
                  className="h-[49px] w-[510px]"
                  src="images/img_ul.svg"
                  alt="ul"
                />
                <div className="flex flex-row gap-[10.63px] items-start justify-start pr-[0.42px] w-auto">
                  <Text
                    className="text-right text-sm text-white-A700 tracking-[4.20px] uppercase w-auto"
                    size="txtPoppinsSemiBold14WhiteA700"
                  >
                    <span className="text-white-A700 font-poppins font-semibold">
                      TERMS{" "}
                    </span>
                    <span className="text-white-A700 font-inter font-semibold">
                      |
                    </span>
                  </Text>
                  <a
                    href="javascript:"
                    className="text-right text-sm text-white-A700 tracking-[4.20px] uppercase w-auto"
                  >
                    <Text size="txtPoppinsSemiBold14WhiteA700">PRIVACY</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritealyPage;
