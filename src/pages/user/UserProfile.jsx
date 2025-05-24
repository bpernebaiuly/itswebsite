import React from "react";
import "./UserProfile.css";

import { BiEdit, BiLinkExternal, BiLogoGmail, BiLogOut } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

import { useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { Logout } from "../../service/MilanApi";
import fetcher from "../../utils/Fetcher";
import { showErrorToast, showSuccessToast } from "../../utils/Toasts";

import Cookies from "js-cookie";
import { Button, Footer, Navbar } from "../../components/shared";
import { userEndpoints } from "../../integrations/ApiEndpoints";
import useAuthStore from "../../store/useAuth";

const UserProfile = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { toggleLoading, isLoading } = useAuthStore((state) => ({
    toggleLoading: state.toggleLoading,
    isLoading: state.isLoading,
  }));

  const { data: userdetails } = useSWR(
    userEndpoints.details(params.slug),
    fetcher,
  );

  async function handleLogout() {
    toggleLoading(true);
    const data = await Logout();

    if (data?.status === 200) {
      showSuccessToast(data?.data?.message);
      setTimeout(() => {
        navigate("/");
        toggleLoading(false);
      }, 1500);
    } else {
      showErrorToast(data?.message);
      toggleLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <div className="userprofile_parentcontainer">
        <div className="userprofile_maincontainer">
          <div className="userprofile_pfp">
            <img
              src={
                userdetails?.profilepicture ||
                "https://images.ctfassets.net/lzny33ho1g45/RdyJrgaCvIKpSB5EUmwNq/319552e88aac20cb8bdffbe307cc9d92/reddit-app-tips-00-hero.png"
              }
              alt=""
            />
          </div>

          <div className="userprofile_body">
            <div className="userprofile_header">
              <div className="userprofile_name">
                <h1>
                  {userdetails?.firstName} {userdetails?.lastName}
                </h1>
                <p>(He/Him)</p>
              </div>

              <div className="userprofile_contact">
                <RiTwitterXFill />
                <BsLinkedin />
                <BiLinkExternal />
              </div>
            </div>

            <div className="userdetails_address">
              <p>{userdetails?.address}</p>
              <p>
                Kolkata, West Bengal, India
                {userdetails?.city} {userdetails?.state} {userdetails?.country}
              </p>
            </div>

            <div className="userdetails_about">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                nihil repellat quam eum facilis eaque soluta magnam aut minima
                provident dolores illo cum eos molestias, nemo praesentium
                {userdetails?.about}
              </p>

              <div className="cta_buttonsdiv">
                {Cookies.get("userName") === params.slug ? (
                  <>
                    <Button type="button" variant="solid" disabled={isLoading}>
                      <BiEdit /> <p>Edit Profile</p>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        handleLogout();
                      }}
                      isLoading={isLoading}
                    >
                      <BiLogOut /> <p>Logout</p>
                    </Button>
                  </>
                ) : (
                  <Button type="button" variant="solid" disabled={isLoading}>
                    <BiLogoGmail /> <p>Drop me a mail</p>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="userprofile_eventscontainer">
          <h1>Events Attending</h1>
          {window.innerWidth > 1200 ? (
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper carousel"
            >
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="clubdetails_eventcard">
                  <img
                    src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                    alt=""
                  />

                  <div className="clubdetails_eventcard_body">
                    <h1>ISB Alumni Social Impact SIG Initiative</h1>
                    <div className="clubdetails_eventcard_body_date">
                      <p>01</p>
                      <p>OCT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserProfile;
