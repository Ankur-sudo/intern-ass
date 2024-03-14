import React from "react";
import { Img, Text, Heading, Button, RatingBar } from "../../components";

export default function FrameTwoPage() {
  return (
    <>

      <div className="flex flex-col items-center justify-start w-full py-10 sm:py-5 bg-gray-100">
        <header className="flex flex-col items-center justify-center w-full gap-[22px]">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1033px]">
            <Button
              size="lg"
              shape="square"
              className="sm:px-5 text-blue_gray-400 font-semibold border-yellow-800 border border-solid min-w-[131px]"
            >
              LOGO
            </Button>
            <div className="flex flex-row md:flex-col justify-start items-start w-[81%] md:w-full gap-10 md:gap-5">
              <div className="h-[36px] w-[59%] md:w-full relative">
                <div className="flex flex-row justify-start w-[49%] gap-[18px] bottom-1/4 right-[3%] m-auto absolute">
                  <a href="#">
                    <Text
                      size="xs"
                      as="p"
                      className="!text-gray-800 !font-poppins capitalize"
                    >
                      My Account
                    </Text>
                  </a>
                  <a href="#">
                    <Text
                      size="xs"
                      as="p"
                      className="!text-gray-800 !font-poppins capitalize"
                    >
                      About Us
                    </Text>
                  </a>
                  <a href="#">
                    <Text
                      size="xs"
                      as="p"
                      className="!text-gray-800 !font-poppins capitalize"
                    >
                      Blog
                    </Text>
                  </a>
                  <a href="#">
                    <Text
                      size="xs"
                      as="p"
                      className="!text-gray-800 !font-poppins capitalize"
                    >
                      My wishlist
                    </Text>
                  </a>
                </div>
                <div className="flex flex-row justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 px-3 m-auto bg-white-A700 absolute rounded-[18px]">
                  <Text
                    size="xs"
                    as="p"
                    className="ml-[17px] !font-poppins capitalize"
                  >
                    Search.....
                  </Text>
                  <div className="flex flex-row justify-center items-center w-[28%]">
                    <div className="h-[36px] w-px bg-gray-200" />
                    <Text
                      size="xs"
                      as="p"
                      className="ml-[11px] !font-poppins capitalize"
                    >
                      All Categories
                    </Text>
                    <Img
                      src="images/img_down_arrow_1.png"
                      alt="downarrowone"
                      className="w-[15px] md:h-auto ml-0.5 object-cover"
                    />
                    <div className="h-[36px] w-px ml-2.5 bg-gray-200" />
                    <Img
                      src="images/img_loupe_1.png"
                      alt="loupeone_one"
                      className="w-[12px] md:h-auto ml-1.5 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[17%] md:w-full">
                <div className="flex flex-row justify-start items-center w-full gap-2">
                  <Img
                    src="images/img_telephone_1.png"
                    alt="telephoneone"
                    className="w-[25px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-start justify-start w-[76%]">
                    <a href="#">
                      <Text
                        size="xs"
                        as="p"
                        className="!text-gray-800 !font-poppins capitalize"
                      >
                        CALL US NOW
                      </Text>
                    </a>
                    <Heading
                      size="xl"
                      as="h6"
                      className="!text-gray-900 !font-poppins capitalize"
                    >
                      +123 456 789
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[15%] md:w-full">
                <div className="flex flex-row justify-start items-center w-full gap-[18px]">
                  <Img
                    src="images/img_user_4_1.png"
                    alt="user4one_one"
                    className="w-[25px] md:h-auto object-cover"
                  />
                  <Img
                    src="images/img_love_1.png"
                    alt="loveone_one"
                    className="w-[25px] md:h-auto object-cover"
                  />
                  <div className="h-[30px] w-[28%] sm:w-full relative">
                    <Img
                      src="images/img_shopping_cart_1.png"
                      alt="shoppingcartone"
                      className="h-[25px] w-[25px] bottom-0 left-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-col items-center justify-start h-[16px] w-[16px] right-0 top-0 m-auto absolute">
                      <Heading
                        as="p"
                        className="flex justify-center items-center h-[16px] w-[16px] !font-semibold bg-red-A200 text-center rounded-[50%]"
                      >
                        3
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between items-center w-full p-[11px] md:gap-10 bg-yellow-800">
            <div className="flex flex-row sm:flex-col justify-center items-start w-[35%] md:w-full ml-[111px] md:ml-5 sm:gap-5">
              <a href="#" className="mt-1 sm:mt-0">
                <Heading size="s" as="p" className="!text-gray-800">
                  HOME
                </Heading>
              </a>
              <div className="flex flex-row justify-center w-[19%] sm:w-full mt-1 ml-[35px] sm:ml-5 sm:mt-0">
                <Heading size="s" as="p" className="!text-gray-800">
                  CATEGORIES
                </Heading>
              </div>
              <Img
                src="images/img_.svg"
                alt="image"
                className="h-[25px] ml-1.5 sm:ml-0"
              />
              <a href="#" className="mt-1 ml-[38px] sm:ml-5 sm:mt-0">
                <Heading size="s" as="p" className="!text-gray-800">
                  ABOUT
                </Heading>
              </a>
              <a href="#" className="mt-1 ml-[35px] sm:ml-5 sm:mt-0">
                <Heading size="s" as="p" className="!text-gray-800">
                  BLOG
                </Heading>
              </a>
              <a href="#" className="mt-1 ml-[35px] sm:ml-5 sm:mt-0">
                <Heading size="s" as="p" className="!text-gray-800">
                  CONTACT US
                </Heading>
              </a>
            </div>
            <div className="flex flex-row justify-start mr-[111px] gap-[22px] md:mr-5">
              <Button
                color="red_A200"
                size="xs"
                shape="square"
                className="font-bold min-w-[115px]"
              >
                SPECIAL OFFER !
              </Button>
              <Button
                color="green_600"
                size="xs"
                shape="square"
                className="font-bold min-w-[90px]"
              >
                HOT DEALS !
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[55px]">
            <Img
              src="images/img_image_5.png"
              alt="imagefive_one"
              className="w-full md:h-auto sm:w-full object-cover"
            />
            <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[1038px]">
              <div className="flex flex-row md:flex-col w-full gap-11">
                <div className="flex flex-row justify-between w-[34%] md:w-full">
                  <div className="h-[54px] w-px bg-gray-200" />
                  <div className="flex flex-row justify-between items-center w-[86%]">
                    <div className="flex flex-row justify-center w-[83%]">
                      <div className="flex flex-row justify-start items-center w-full gap-4">
                        <Img
                          src="images/img_quality_1.png"
                          alt="image"
                          className="w-[40px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[78%] gap-[5px]">
                          <Heading
                            size="md"
                            as="h1"
                            className="!text-gray-900 tracking-[0.70px]"
                          >
                            FREE SHIPPING & RETURN
                          </Heading>
                          <Text size="s" as="p" className="!text-gray-800">
                            Free shipping on all orders over $99.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[54px] w-px bg-gray-200" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[30%] md:w-full">
                  <div className="flex flex-row justify-center w-[81%]">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img
                        src="images/img_quality_2.png"
                        alt="qualitytwo_one"
                        className="w-[40px] md:h-auto object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-[78%] gap-[5px]">
                        <Heading
                          size="md"
                          as="h2"
                          className="!text-gray-900 tracking-[0.70px]"
                        >
                          FREE SHIPPING & RETURN
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-800">
                          Free shipping on all orders over $99.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[54px] w-px bg-gray-200" />
                </div>
                <div className="flex flex-row justify-center w-[25%] md:w-full mt-[11px] mb-[3px] md:mt-0">
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    <Img
                      src="images/img_quality_3.png"
                      alt="qualitythree"
                      className="w-[40px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[78%] gap-[5px]">
                      <Heading
                        size="md"
                        as="h3"
                        className="!text-gray-900 tracking-[0.70px]"
                      >
                        FREE SHIPPING & RETURN
                      </Heading>
                      <Text size="s" as="p" className="!text-gray-800">
                        Free shipping on all orders over $99.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[54px] w-px md:w-full md:h-px bg-gray-200" />
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[63px] gap-[19px] md:gap-5">
                <div className="h-[2px] w-[38%] bg-gray-200" />
                <Heading
                  size="2xl"
                  as="h4"
                  className="!text-gray-900 tracking-[0.90px] uppercase"
                >
                  Featured Products
                </Heading>
                <div className="h-[2px] w-[38%] bg-gray-200" />
              </div>
              <div className="flex flex-row md:flex-col items-center w-full mt-[39px] gap-5 md:gap-[5px]">
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full mb-[25px] gap-[18px]">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_6.png"
                        alt="image"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-[17%] gap-[11px] left-[2%] top-[6%] m-auto absolute">
                        <div className="flex flex-row justify-center">
                          <Heading
                            as="h5"
                            className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                          >
                            -30%
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Heading
                            as="h6"
                            className="flex justify-center items-center w-full h-[17px] px-[7px] py-0.5 capitalize bg-green-600 rounded-lg"
                          >
                            HOT
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="image_one"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full pb-6 sm:pb-5 bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_7.png"
                        alt="imageseven_one"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-row justify-start w-[17%] left-[5%] top-[6%] m-auto absolute">
                        <Heading
                          as="p"
                          className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                        >
                          -30%
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlisttwo_one"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full mb-[25px] gap-[18px]">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_44.png"
                        alt="imagefortyfour"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-[17%] gap-[11px] left-[2%] top-[6%] m-auto absolute">
                        <div className="flex flex-row justify-center">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                          >
                            -30%
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-[7px] py-0.5 capitalize bg-green-600 rounded-lg"
                          >
                            HOT
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlistninetee"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full pb-6 sm:pb-5 bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_45.png"
                        alt="imagefortyfive"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-row justify-start w-[17%] left-[5%] top-[6%] m-auto absolute">
                        <Heading
                          as="p"
                          className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                        >
                          -30%
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlisttwenty"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-end w-full mt-[62px] gap-[15px] md:gap-5">
                <div className="h-[2px] w-[43%] mb-[9px] bg-gray-200" />
                <Heading
                  size="2xl"
                  as="h6"
                  className="!text-gray-900 tracking-[0.90px] uppercase"
                >
                  Categories
                </Heading>
                <div className="h-[2px] w-[43%] mb-[9px] bg-gray-200" />
              </div>
              <div className="h-[424px] w-full mt-[38px] relative">
                <Img
                  src="images/img_image_30.png"
                  alt="imagethirty_one"
                  className="h-[95px] w-[11%] sm:w-full bottom-[23%] right-0 left-0 m-auto object-cover absolute"
                />
                <div className="justify-center h-[424px] w-full left-0 bottom-0 right-0 top-0 p-[38px] m-auto sm:p-5 bg-white-A700 absolute rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-[11%] gap-[13px] bottom-[12%] right-0 left-0 m-auto absolute">
                    <Img
                      src="images/img_image_35.png"
                      alt="imagethirtyfive"
                      className="w-[111px] md:h-auto object-cover"
                    />
                    <Text as="p" className="!text-gray-900 capitalize">
                      Mobile Phone
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-[26px]">
                        <div className="flex flex-row md:flex-col w-[94%] gap-[89px] md:gap-10">
                          <div className="flex flex-col items-center justify-start w-[13%] md:w-full gap-[13px]">
                            <Img
                              src="images/img_image_30.png"
                              alt="mobile_phone"
                              className="w-[111px] md:h-auto object-cover"
                            />
                            <Text as="p" className="!text-gray-900 capitalize">
                              Mobile Phone
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[13%] md:w-full gap-[13px]">
                            <Img
                              src="images/img_image_32.png"
                              alt="imagethirtytwo"
                              className="w-[111px] md:h-auto object-cover"
                            />
                            <Text as="p" className="!text-gray-900 capitalize">
                              Mobile Phone
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[13%] md:w-full gap-[13px]">
                            <Img
                              src="images/img_image_34.png"
                              alt="imagethirtyfour"
                              className="w-[111px] md:h-auto object-cover"
                            />
                            <Text as="p" className="!text-gray-900 capitalize">
                              Mobile Phone
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[13%] md:w-full gap-[13px]">
                            <Img
                              src="images/img_image_36.png"
                              alt="imagethirtysix"
                              className="w-[111px] md:h-auto object-cover"
                            />
                            <Text as="p" className="!text-gray-900 capitalize">
                              Mobile Phone
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[13%] md:w-full gap-[13px]">
                            <Img
                              src="images/img_image_38.png"
                              alt="imagethirtyeigh"
                              className="w-[111px] md:h-auto object-cover"
                            />
                            <Text as="p" className="!text-gray-900 capitalize">
                              Mobile Phone
                            </Text>
                          </div>
                        </div>
                        <div className="h-px w-full bg-gray-200" />
                      </div>
                    </div>
                    <div className="h-[346px] w-px mt-[-169px] ml-[198px] md:ml-5 bg-gray-200" />
                  </div>
                  <div className="h-[346px] w-px ml-[392px] left-[42%] bottom-0 top-0 my-auto md:ml-5 bg-gray-200 absolute" />
                  <div className="h-[346px] w-px mr-[379px] right-[40%] bottom-0 top-0 my-auto md:mr-5 bg-gray-200 absolute" />
                  <div className="h-[346px] w-px mr-[183px] right-[21%] bottom-0 top-0 my-auto md:mr-5 bg-gray-200 absolute" />
                  <div className="flex flex-col items-center justify-start w-[11%] gap-[13px] bottom-[12%] right-[7%] m-auto absolute">
                    <Img
                      src="images/img_image_39.png"
                      alt="imagethirtynine"
                      className="w-[111px] md:h-auto object-cover"
                    />
                    <Text as="p" className="!text-gray-900 capitalize">
                      Mobile Phone
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[11%] gap-[13px] bottom-[12%] left-[27%] m-auto absolute">
                    <Img
                      src="images/img_image_33.png"
                      alt="imagethirtythre"
                      className="w-[111px] md:h-auto object-cover"
                    />
                    <Text as="p" className="!text-gray-900 capitalize">
                      Mobile Phone
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[11%] gap-[13px] bottom-[12%] right-[26%] m-auto absolute">
                    <Img
                      src="images/img_image_37.png"
                      alt="imagethirtyseve"
                      className="w-[111px] md:h-auto object-cover"
                    />
                    <Text as="p" className="!text-gray-900 capitalize">
                      Mobile Phone
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[11%] gap-[13px] bottom-[12%] left-[8%] m-auto absolute">
                    <Img
                      src="images/img_image_31.png"
                      alt="imagethirtyone"
                      className="w-[111px] md:h-auto object-cover"
                    />
                    <Text as="p" className="!text-gray-900 capitalize">
                      Mobile Phone
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col w-full mt-[65px] gap-5">
                <Img
                  src="images/img_image_9.png"
                  alt="image"
                  className="w-[49%] md:h-auto sm:w-full object-cover"
                />
                <Img
                  src="images/img_image_10.png"
                  alt="image"
                  className="w-[50%] md:h-auto sm:w-full object-cover"
                />
              </div>
              <div className="flex flex-row md:flex-col justify-start items-end w-full mt-[71px] gap-4 md:gap-5">
                <div className="h-[2px] w-[43%] mb-[9px] bg-gray-200" />
                <Heading
                  size="2xl"
                  as="h6"
                  className="!text-gray-900 tracking-[0.90px] uppercase"
                >
                  bestsellers
                </Heading>
                <div className="h-[2px] w-[42%] mb-[9px] bg-gray-200" />
              </div>
              <div className="flex flex-row md:flex-col items-center w-full mt-[41px] gap-5 md:gap-[5px]">
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full mb-[25px] gap-[18px]">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_46.png"
                        alt="image"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-[17%] gap-[11px] left-[2%] top-[6%] m-auto absolute">
                        <div className="flex flex-row justify-center">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                          >
                            -30%
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-[7px] py-0.5 capitalize bg-green-600 rounded-lg"
                          >
                            HOT
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="image_one"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full pb-6 sm:pb-5 bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_48.png"
                        alt="imagefortyeight"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-row justify-start w-[17%] left-[5%] top-[6%] m-auto absolute">
                        <Heading
                          as="p"
                          className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                        >
                          -30%
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlisttwentyt"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full mb-[25px] gap-[18px]">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_47.png"
                        alt="imagefortyseven"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-[17%] gap-[11px] left-[2%] top-[6%] m-auto absolute">
                        <div className="flex flex-row justify-center">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                          >
                            -30%
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-[7px] py-0.5 capitalize bg-green-600 rounded-lg"
                          >
                            HOT
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlisttwentyt"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full pb-6 sm:pb-5 bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_49.png"
                        alt="imagefortynine"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-row justify-start w-[17%] left-[5%] top-[6%] m-auto absolute">
                        <Heading
                          as="p"
                          className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                        >
                          -30%
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlisttwentyf"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-end w-full mt-[73px] gap-6 md:gap-5">
                <div className="h-[2px] w-[43%] mb-[9px] bg-gray-200" />
                <Heading
                  size="2xl"
                  as="h6"
                  className="!text-gray-900 tracking-[0.90px] uppercase"
                >
                  big deals
                </Heading>
                <div className="h-[2px] w-[43%] mb-[9px] bg-gray-200" />
              </div>
              <div className="flex flex-row md:flex-col items-center w-full mt-[41px] gap-5 md:gap-[5px]">
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full mb-[25px] gap-[18px]">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_50.png"
                        alt="image"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-[17%] gap-[11px] left-[2%] top-[6%] m-auto absolute">
                        <div className="flex flex-row justify-center">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                          >
                            -30%
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-[7px] py-0.5 capitalize bg-green-600 rounded-lg"
                          >
                            HOT
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="image_one"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full pb-6 gap-5 sm:pb-5 bg-white-A700 rounded-[13px]">
                  <div className="h-[247px] w-full relative">
                    <Img
                      src="images/img_image_52.png"
                      alt="imagefiftytwo"
                      className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                    />
                    <div className="flex flex-row justify-start w-[17%] left-[5%] top-[6%] m-auto absolute">
                      <Heading
                        as="p"
                        className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                      >
                        -30%
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                    <Text
                      as="p"
                      className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                    >
                      Porto Evolution Headset Porto Evolution Headset
                    </Text>
                    <RatingBar
                      value={3}
                      isEditable={true}
                      size={10}
                      className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                    />
                    <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                      <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                        <div className="flex flex-row justify-center w-[43%]">
                          <Text as="p" className="capitalize">
                            $38.69
                          </Text>
                        </div>
                        <Text
                          size="xl"
                          as="p"
                          className="!text-red-A200 capitalize"
                        >
                          $32.69
                        </Text>
                      </div>
                      <Img
                        src="images/img_wishlist_1.png"
                        alt="wishlisttwentys"
                        className="w-[20px] md:h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full mb-[25px] gap-[18px]">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_51.png"
                        alt="imagefiftyone"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-[17%] gap-[11px] left-[2%] top-[6%] m-auto absolute">
                        <div className="flex flex-row justify-center">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                          >
                            -30%
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-full h-[17px] px-[7px] py-0.5 capitalize bg-green-600 rounded-lg"
                          >
                            HOT
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlisttwentys"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[52px] h-px bg-blue_gray-400" />
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full pb-6 sm:pb-5 bg-white-A700 rounded-[13px]">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="h-[247px] w-full relative">
                      <Img
                        src="images/img_image_53.png"
                        alt="imagefiftythree"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[13px] rounded-tl-[13px] object-cover absolute"
                      />
                      <div className="flex flex-row justify-start w-[17%] left-[5%] top-[6%] m-auto absolute">
                        <Heading
                          as="p"
                          className="flex justify-center items-center w-full h-[17px] px-1.5 py-0.5 capitalize bg-red-A200 rounded-lg"
                        >
                          -30%
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full gap-[15px]">
                      <Text
                        as="p"
                        className="ml-0.5 md:ml-0 !text-gray-900 capitalize"
                      >
                        Porto Evolution Headset Porto Evolution Headset
                      </Text>
                      <RatingBar
                        value={3}
                        isEditable={true}
                        size={10}
                        className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                      />
                      <div className="flex flex-row justify-between items-center w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[57%] gap-[9px]">
                          <div className="flex flex-row justify-center w-[43%]">
                            <Text as="p" className="capitalize">
                              $38.69
                            </Text>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                        <Img
                          src="images/img_wishlist_1.png"
                          alt="wishlisttwentye"
                          className="w-[20px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-center items-end w-full mt-[79px] md:gap-5">
                <div className="h-[2px] w-[41%] mb-[9px] bg-gray-200" />
                <Heading
                  size="2xl"
                  as="h6"
                  className="ml-[22px] md:ml-0 sm:ml-5 !text-gray-900 tracking-[0.90px] uppercase"
                >
                  Shop by brand
                </Heading>
                <div className="h-[2px] w-[41%] mb-[9px] ml-[13px] md:ml-0 bg-gray-200" />
              </div>
              <div className="flex flex-row justify-center w-full mt-[35px]">
                <div className="h-[259px] w-full p-[21px] sm:p-5 bg-white-A700 relative rounded-[13px]">
                  <div className="h-px w-[95%] bottom-[47%] right-0 left-0 m-auto bg-gray-200 absolute" />
                  <div className="h-[216px] w-px ml-36 left-[16%] bottom-0 top-0 my-auto md:ml-5 bg-gray-200 absolute" />
                  <div className="h-[216px] w-px ml-80 left-[33%] bottom-0 top-0 my-auto md:ml-5 bg-gray-200 absolute" />
                  <div className="justify-center h-[216px] w-px left-0 bottom-0 right-0 top-0 m-auto bg-gray-200 absolute" />
                  <div className="h-[216px] w-px mr-[321px] right-[33%] bottom-0 top-0 my-auto md:mr-5 bg-gray-200 absolute" />
                  <div className="h-[216px] w-px mr-[145px] right-[16%] bottom-0 top-0 my-auto md:mr-5 bg-gray-200 absolute" />
                  <Img
                    src="images/img_image_15.png"
                    alt="imagefifteen"
                    className="h-[25px] w-[10%] sm:w-full left-[3%] top-1/4 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_15.png"
                    alt="imagenineteen"
                    className="h-[25px] w-[10%] sm:w-full left-[36%] top-1/4 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_15.png"
                    alt="imagetwentythre"
                    className="h-[25px] w-[10%] sm:w-full right-[20%] top-1/4 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_20.png"
                    alt="imagetwenty_one"
                    className="h-[17px] w-[10%] sm:w-full right-[38%] top-[26%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_20.png"
                    alt="imagesixteen"
                    className="h-[17px] w-[10%] sm:w-full left-[19%] top-[26%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_21.png"
                    alt="imagetwentyone"
                    className="h-[26px] w-[8%] sm:w-full bottom-[23%] left-[38%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_20.png"
                    alt="imagetwentyfour"
                    className="h-[17px] w-[10%] sm:w-full right-[3%] top-[26%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_22.png"
                    alt="imagetwentytwo"
                    className="h-[24px] w-[8%] sm:w-full bottom-[23%] right-[39%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_21.png"
                    alt="imageseventeen"
                    className="h-[26px] w-[8%] sm:w-full bottom-[23%] left-[5%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_21.png"
                    alt="imagetwentyfive"
                    className="h-[26px] w-[8%] sm:w-full bottom-[23%] right-[20%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_22.png"
                    alt="imageeighteen"
                    className="h-[24px] w-[8%] sm:w-full bottom-[23%] left-[21%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_image_22.png"
                    alt="imagetwentysix"
                    className="h-[24px] w-[8%] sm:w-full bottom-[23%] right-[5%] m-auto object-cover absolute"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[86px]">
                <div className="flex flex-col items-center justify-start w-full gap-9">
                  <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[21px] md:gap-5">
                    <Heading
                      size="2xl"
                      as="h6"
                      className="!text-gray-900 tracking-[0.90px] uppercase"
                    >
                      Top rated
                    </Heading>
                    <div className="h-[2px] w-[20%] bg-gray-200" />
                    <Heading
                      size="2xl"
                      as="h6"
                      className="!text-gray-900 tracking-[0.90px] uppercase"
                    >
                      New product
                    </Heading>
                    <div className="h-[2px] w-[17%] bg-gray-200" />
                    <Heading
                      size="2xl"
                      as="h6"
                      className="!text-gray-900 tracking-[0.90px] uppercase"
                    >
                      Top Selling
                    </Heading>
                    <div className="h-[2px] w-[19%] bg-gray-200" />
                  </div>
                  <div className="justify-center w-full gap-[21px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <div className="flex flex-row justify-start w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_28.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_28_154x156.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-[19px] bg-white-A700 rounded-[13px]">
                      <Img
                        src="images/img_rectangle_28_1.png"
                        alt="image"
                        className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                        <Text
                          as="p"
                          className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                        >
                          Porto Evolution Headset Porto.......
                        </Text>
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                        />
                        <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                          <div className="h-[17px] w-[43%] sm:w-full relative">
                            <Text
                              as="p"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                            >
                              $38.69
                            </Text>
                            <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_31.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_31_154x156.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_31_1.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-[19px] bg-white-A700 rounded-[13px]">
                      <Img
                        src="images/img_rectangle_33.png"
                        alt="image"
                        className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                        <Text
                          as="p"
                          className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                        >
                          Porto Evolution Headset Porto.......
                        </Text>
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                        />
                        <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                          <div className="h-[17px] w-[43%] sm:w-full relative">
                            <Text
                              as="p"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                            >
                              $38.69
                            </Text>
                            <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_33_154x156.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_33_1.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-[19px] bg-white-A700 rounded-[13px]">
                      <Img
                        src="images/img_rectangle_33_2.png"
                        alt="image"
                        className="w-[47%] md:h-auto sm:w-full rounded-bl-[13px] rounded-tl-[13px] object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                        <Text
                          as="p"
                          className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                        >
                          Porto Evolution Headset Porto.......
                        </Text>
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                        />
                        <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                          <div className="h-[17px] w-[43%] sm:w-full relative">
                            <Text
                              as="p"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                            >
                              $38.69
                            </Text>
                            <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="!text-red-A200 capitalize"
                          >
                            $32.69
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_33_3.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end w-full bg-white-A700 rounded-[13px]">
                      <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                        <Img
                          src="images/img_rectangle_33_4.png"
                          alt="image"
                          className="w-[47%] md:h-auto sm:w-full object-cover rounded-[13px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[15px]">
                          <Text
                            as="p"
                            className="w-[99%] ml-0.5 md:ml-0 !text-gray-900 capitalize"
                          >
                            Porto Evolution Headset Porto.......
                          </Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between h-[10px] ml-[5px] md:ml-0 bg-[url(/public/images/img_group_17.png)] bg-cover bg-no-repeat"
                          />
                          <div className="flex flex-row justify-start items-center w-[79%] md:w-full gap-[9px]">
                            <div className="h-[17px] w-[43%] sm:w-full relative">
                              <Text
                                as="p"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto capitalize absolute"
                              >
                                $38.69
                              </Text>
                              <div className="h-px w-full bottom-[38%] right-0 left-0 m-auto bg-blue_gray-400 absolute rounded-[1px]" />
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="!text-red-A200 capitalize"
                            >
                              $32.69
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center w-full mt-[91px] mb-[85px] gap-[17px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="h-[2px] w-full bg-gray-200" />
              <div className="h-[2px] w-full mt-[-2px] bg-gray-200" />
              <div className="flex flex-row justify-between w-[45%] md:w-full mt-[65px] ml-1 md:ml-0">
                <Heading
                  size="lg"
                  as="p"
                  className="!text-gray-900 tracking-[0.30px] uppercase"
                >
                  contact info
                </Heading>
                <Heading
                  size="lg"
                  as="p"
                  className="!text-gray-900 tracking-[0.75px] uppercase"
                >
                  subscribe newsletter
                </Heading>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[17px] ml-1 gap-[22px] md:gap-5 md:ml-0">
                <div className="flex flex-row sm:flex-col justify-between w-[58%] md:w-full sm:gap-10">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <Text
                      size="md"
                      as="p"
                      className="!text-gray-900 tracking-[0.26px] uppercase"
                    >
                      Address:
                    </Text>
                    <Text
                      size="md"
                      as="p"
                      className="tracking-[0.26px] capitalize"
                    >
                      1234 Street Name, City, England
                    </Text>
                  </div>
                  <Text
                    size="md"
                    as="p"
                    className="w-[57%] tracking-[0.26px] capitalize leading-5"
                  >
                    Get all the latest information on Events, Sales and Offers.
                    Sign up for newsletter today.
                  </Text>
                </div>
                <div className="flex flex-row justify-end w-[41%] md:w-full bg-white-A700 rounded-[18px]">
                  <Button
                    color="yellow_800"
                    size="md"
                    className="rounded-tr-[20px] rounded-br-[20px] tracking-[0.55px] uppercase font-bold min-w-[95px]"
                  >
                    subscribe{" "}
                  </Button>
                </div>
              </div>
              <Text
                size="md"
                as="p"
                className="mt-4 ml-1 md:ml-0 !text-gray-900 tracking-[0.26px] uppercase"
              >
                PHONE::
              </Text>
              <div className="flex flex-row md:flex-col justify-between items-start w-full mt-1.5 ml-1 md:gap-10 md:ml-0">
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[25px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <a href="#">
                      <Text
                        size="md"
                        as="p"
                        className="tracking-[0.26px] capitalize"
                      >
                        (123) 456-7890
                      </Text>
                    </a>
                    <Text
                      size="md"
                      as="p"
                      className="mt-[18px] !text-gray-900 tracking-[0.26px] uppercase"
                    >
                      EMAIL:
                    </Text>
                    <a href="#" className="mt-2">
                      <Text
                        size="md"
                        as="p"
                        className="tracking-[0.26px] capitalize"
                      >
                        mail@example.com
                      </Text>
                    </a>
                    <Text
                      size="md"
                      as="p"
                      className="mt-[17px] !text-gray-900 tracking-[0.26px] uppercase"
                    >
                      WORKING DAYS/HOURS:
                    </Text>
                    <a href="#" className="mt-[7px]">
                      <Text
                        size="md"
                        as="p"
                        className="tracking-[0.26px] capitalize"
                      >
                        Mon - Sun / 9:00AM - 8:00PM
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start ml-0.5 gap-4 md:ml-0">
                    <Button shape="round" className="w-[24%] !rounded-[50%]">
                      <Img src="images/img_group_2.png" />
                    </Button>
                    <Button shape="round" className="w-[24%] !rounded-[50%]">
                      <Img src="images/img_group_91.png" />
                    </Button>
                    <Button shape="round" className="w-[24%] !rounded-[50%]">
                      <Img src="images/img_group_3.png" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[75%] md:w-full mt-[3px] gap-6 md:mt-0">
                  <div className="h-[2px] w-full bg-gray-200" />
                  <div className="flex flex-row justify-between w-[68%] md:w-full">
                    <Heading
                      size="lg"
                      as="p"
                      className="!text-gray-900 tracking-[0.30px] uppercase"
                    >
                      customer service
                    </Heading>
                    <Heading
                      size="lg"
                      as="p"
                      className="!text-gray-900 tracking-[0.30px] uppercase"
                    >
                      our service
                    </Heading>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between w-[89%] md:w-full sm:gap-10">
                    <div className="flex flex-row justify-between w-[39%] sm:w-full">
                      <ul className="flex flex-col items-start justify-start gap-1.5">
                        <li>
                          <a href="#">
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[0.26px] capitalize"
                            >
                              About us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[0.26px] capitalize"
                            >
                              Contact us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[0.26px] capitalize"
                            >
                              my account
                            </Text>
                          </a>
                        </li>
                      </ul>
                      <ul className="flex flex-col items-start justify-start gap-1.5">
                        <li>
                          <a href="#">
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[0.26px] capitalize"
                            >
                              About us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[0.26px] capitalize"
                            >
                              Contact us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[0.26px] capitalize"
                            >
                              my account
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[39%] sm:w-full gap-[7px]">
                      <div className="flex flex-row justify-between w-[99%] md:w-full">
                        <ul className="flex flex-col items-start justify-start gap-[5px]">
                          <li>
                            <a href="#">
                              <Text
                                size="md"
                                as="p"
                                className="tracking-[0.26px] capitalize"
                              >
                                About us
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text
                                size="md"
                                as="p"
                                className="tracking-[0.26px] capitalize"
                              >
                                Contact us
                              </Text>
                            </a>
                          </li>
                        </ul>
                        <div className="flex flex-col items-start justify-start w-[28%] gap-[5px]">
                          <div className="flex flex-row justify-start">
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[0.26px] capitalize"
                            >
                              About us
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start">
                            <a href="#">
                              <Text
                                size="md"
                                as="p"
                                className="tracking-[0.26px] capitalize"
                              >
                                Contact us
                              </Text>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="md"
                          as="p"
                          className="tracking-[0.26px] capitalize"
                        >
                          my account
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="tracking-[0.26px] capitalize"
                        >
                          my account
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[2px] w-full mt-[59px] bg-gray-200" />
            </div>
          </div>
          <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
            <Text size="md" as="p" className="tracking-[0.26px] capitalize">
              @ eCommerce. 2023. All Rights Reserved
            </Text>
            <Img
              src="images/img_image_27.png"
              alt="imagetwentyseve"
              className="w-[31%] md:h-auto sm:w-full object-cover"
            />
          </div>
        </footer>
      </div>
    </>
  );
}
