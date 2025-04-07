import Navbar from "../Main/sections/Navbar";
import storesLogo from "../../assets/img/download (24).png";
import Map from "./Map";
import openLogo from "../../assets/img/openhour.380117d5.png";
import closesLogo from "../../assets/img/download (25).png";
import "./index.css";

interface Stores {
  locationTitle: string;
  distance: string;
  assessment: string;
  starSvg: JSX.Element;
  comment: string;
  opensLogo: string;
  opTitleSvg: JSX.Element;
  opensTitle: string;
  closesLogo: string;
  clTitleSvg: JSX.Element;
  closesTitle: string;
  note?: string;
  shopBtn: string;
  directionBtn: string;
  callSvg: JSX.Element;
  callBtn: string;
  locationText: string;
}

const storesData: Stores[] = [
  {
    locationTitle: "Sumqayıt",
    locationText: "140, 20 Yanvar küçəsi, Sumqayıt",
    distance: "MƏSAFƏ 4.85 KM",
    assessment: "4.6",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 05:00",
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    note: undefined,
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    note: undefined,
    locationText: "283 Heydər Əliyev prospekti, Xırdalan",
    locationTitle: "Xırdalan",
    distance: "MƏSAFƏ 17.60 KM",
    assessment: "4.1",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 02:00",
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    note: undefined,
    locationText: "51M Mir Cəlal küçəsi, Bakı",
    locationTitle: "Mikrorayon",
    distance: "MƏSAFƏ 23.99 KM",
    assessment: "4.2",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 02:00",
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    locationTitle: "Gənclik",
    locationText: "3 Koroğlu Rəhimov küçəsi, Bakı",
    distance: "MƏSAFƏ 27.81 KM",
    assessment: "4.1",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 02:00",
    note: "(Çatdırılma saat 05:00-dək)",
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    locationTitle: "Narimanov Heykal",
    locationText: "9A Mikayıl Müşfiq küçəsi, Bakı",
    distance: "MƏSAFƏ 29.16 KM",
    assessment: "4.1",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 02:00",
    note: "(Çatdırılma saat 05:00-dək)",
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    locationTitle: "Sahil Mərkəz",
    locationText: "3 Azadlıq prospekti, Bakı",
    distance: "MƏSAFƏ 21.32 KM",
    assessment: "4.2",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 05:00",
    note: undefined,
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    locationTitle: "Qara Qarayev",
    locationText: "34S, Qara Qarayev prospekti, Bakı",
    distance: "MƏSAFƏ 23.23 KM",
    assessment: "4.4",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 05:00",
    note: undefined,
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    locationTitle: "Həzi Aslanov",
    locationText: "65 Məhəmməd Hadi, Bakı",
    distance: "MƏSAFƏ 27.36 KM",
    assessment: "4.1",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 02:00",
    note: "(Çatdırılma saat 05:00-dək)",
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    locationTitle: "Mərdəkan",
    locationText: "98A Sergey Yesenin küçəsi, Bakı",
    distance: "MƏSAFƏ 38.85 KM",
    assessment: "5",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 05:00",
    note: undefined,
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
  {
    locationTitle: "Gəncə",
    locationText: "427D Heydər Əliyev prospekti,Gəncə",
    distance: "MƏSAFƏ 283.85 KM",
    assessment: "5",
    starSvg: (
      <svg
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "16px",
          height: "16px",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={{
            fill: "rgb(235, 188, 0)",
            transition: "fill 0.2s ease-in-out",
          }}
        />
      </svg>
    ),
    comment: "Rəy",
    opensLogo: openLogo,
    opTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    opensTitle: "Açılır 10:00",
    closesLogo: closesLogo,
    clTitleSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.71 11.29l-9-9a.9959.9959 0 0 0-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    ),
    closesTitle: "Bağlanır 05:00",
    note: undefined,
    shopBtn: "İNDİ SİFARİŞ EDİN",
    directionBtn: "İSTİQAMƏT AL",
    callSvg: (
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
      </svg>
    ),
    callBtn: "İNDİ ZƏNG ET",
  },
];

function Stores() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="stores-full">
          <div className="stores-header">
            <img src={storesLogo} alt="Stores Logo" />
          </div>
          <div className="stores-main">
            <div className="maps">
              <Map />
            </div>
            <div className="stores-container">
              <div className="search">
                <input type="text" placeholder="Search..." />
                <svg
                  className="MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                </svg>
              </div>
              <div className="gray-underline"></div>
              <div className="stores-card-container">
              {storesData.map((stores, index) => (
                <div key={index} className="stores-card">
                  <div className="stores-card-header">
                    <h3 className="red-title">{stores.locationTitle}</h3>
                    <h3 className="blue-title">{stores.distance}</h3>
                  </div>
                  <div className="stores-text">
                    <p>{stores.locationText}</p>
                  </div>
                  <div className="stores-comment">
                    <div className="assesment">
                      <p>{stores.assessment}</p>
                    </div>
                    <div className="stars-svg">
                      <span>{stores.starSvg}</span>
                      <span>{stores.starSvg}</span>
                      <span>{stores.starSvg}</span>
                      <span>{stores.starSvg}</span>
                      <span>{stores.starSvg}</span>
                    </div>
                    <div className="comment">
                      <p>{stores.comment}</p>
                    </div>
                  </div>
                  <div className="open-closes">
                    <div className="open">
                      <img src={openLogo} />
                      <p>{stores.opensTitle}</p>
                    </div>
                    <div className="closes">
                      <img src={closesLogo} />
                      <p>{stores.closesTitle}</p>
                    </div>
                    <div className="note">
                       {stores.note && <p>{stores.note}</p>}
                    </div>
                  </div>
                  <div className="low-btn">
                    <button className="low-shop-btn">
                      <span>{stores.opTitleSvg}</span>
                      <h5>{stores.shopBtn}</h5>
                    </button>
                    <button className="low-drcl-btn">
                      <span>{stores.clTitleSvg}</span>
                      <h5>{stores.directionBtn}</h5>
                    </button>
                    <button className="low-drcl-btn">
                      <span>{stores.callSvg}</span>
                      <h5>{stores.callBtn}</h5>
                    </button>
                  </div>
                  <div className="gray-underline"></div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stores;
