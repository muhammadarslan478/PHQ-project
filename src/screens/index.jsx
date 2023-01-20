import { PngHeaderimg } from "assets";
import { Aboutcard } from "components";

export default function Index() {
  return (
    <>
      <div className="header__container">
        <img className="header__container__img" src={PngHeaderimg} alt=""></img>
        <div className="header__container__text">
          <div className="header__container__text__subheading">
            USING PHQ BLOCKCHAIN
          </div>
        </div>
      </div>
      <div className="about__section">
        <div className="about__section__heading">About PHQ Blockchain</div>
        <div className="about__section__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="about__section__cards">
          <Aboutcard
            icon={
              <svg
                width="80"
                height="63"
                viewBox="0 0 80 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_62_2)">
                  <path
                    d="M46.3228 42.754L46.5827 35.5353L63.2094 44.2699V63.0048C57.6639 60.6419 52.5229 57.4849 47.1507 54.7851C46.2457 54.328 46.4142 53.4761 46.4046 52.6965C46.3757 50.0721 46.3484 47.4493 46.3228 44.8281V42.754Z"
                    fill="#050F2B"
                  />
                  <path
                    d="M63.2095 63V44.265C68.7116 41.2909 74.1512 38.2061 79.8362 35.5737C79.8876 41.477 79.9422 47.3803 80 53.2836C80.035 53.6005 79.9691 53.9203 79.8118 54.1977C79.6545 54.475 79.4138 54.6957 79.1238 54.8284C73.7998 57.5138 68.6972 60.6274 63.2095 63Z"
                    fill="#2C064C"
                  />
                  <path
                    d="M15.9433 36.1465C10.9852 33.5606 6.02219 30.9811 1.05438 28.408C0.723726 28.2711 0.444291 28.0341 0.255222 27.7303C0.0661531 27.4264 -0.0230327 27.0711 0.000195803 26.714C0.000195803 20.9391 0.000125289 15.1641 0.048263 9.4132C0.048263 9.13889 0.322709 8.8694 0.471936 8.59509C0.953312 9.41802 1.81974 9.67308 2.58513 10.0773C7.22239 12.5221 11.8646 14.9572 16.5114 17.3827C16.5114 22.9074 16.5402 28.4513 16.5354 33.9568C16.5306 34.746 16.8146 35.593 15.9433 36.1465Z"
                    fill="#050F2B"
                  />
                  <path
                    d="M79.8364 35.5738C74.1514 38.2062 68.7118 41.291 63.2097 44.2651L46.583 35.5305L50.8047 32.8355C51.8075 32.5566 52.7417 32.0732 53.5485 31.4158C56.3068 30.0154 59.0651 28.6053 61.833 27.2241C62.4395 26.9209 62.9932 26.3531 63.8019 26.8103C69.1018 29.8132 74.7435 32.1906 79.8364 35.5738Z"
                    fill="#610A8A"
                  />
                  <path
                    d="M16.5112 17.3826C11.8643 14.9539 7.22213 12.5188 2.58487 10.0773C1.81948 9.67305 0.943429 9.418 0.47168 8.59506C5.36728 5.42365 10.7297 3.09441 15.8035 0.240613C16.0783 0.0776519 16.3931 -0.00591501 16.7126 -0.000817584C17.0321 0.00427984 17.3439 0.0978408 17.6134 0.269487C22.7257 3.0543 27.8444 5.82789 32.9694 8.59025C27.7224 11.9734 22.0711 14.5962 16.5112 17.3826Z"
                    fill="#610A8A"
                  />
                  <path
                    d="M46.3231 42.754V44.8233C41.6537 43.8849 37.8364 41.238 34.178 38.4468C32.3054 37.0031 32.4594 34.4236 34.0191 32.3735C35.7087 30.1597 38.1733 29.2357 40.7246 28.4705C40.9515 28.3891 41.2002 28.393 41.4244 28.4816C41.6485 28.5702 41.8327 28.7373 41.9425 28.9518C42.3324 29.5678 41.7164 29.6496 41.4179 29.9865C40.5225 30.9923 39.1265 31.026 38.1301 31.82C36.7292 32.9413 35.7231 34.1926 36.2815 36.1176C36.4308 36.6325 36.6955 37.3736 37.3887 36.7095C38.7703 35.3861 40.6958 35.0059 42.1448 33.822C44.7105 31.7334 44.6575 29.2694 41.7884 27.6428C39.0398 26.0787 36.4933 24.1008 33.3981 23.1865C31.3022 22.5756 29.0577 22.7274 27.0632 23.6148C25.2484 24.3463 23.5395 25.3809 23.3181 27.5851C23.087 29.871 24.9018 30.6843 26.5385 31.5553C27.6986 32.2435 28.8491 32.9461 30.0188 33.6199C31.7999 34.6498 31.8047 34.6401 31.8529 37.133C28.7432 36.2042 26.3267 34.0915 23.4866 32.8643C17.609 29.4475 20.165 24.6831 24.1123 22.5753C26.9515 21.0933 30.1642 20.479 33.35 20.8091C37.7257 21.7716 41.3119 24.3607 44.9656 26.6996C47.8057 28.5235 47.7528 32.1425 45.1293 34.4958C43.122 36.2956 40.7054 37.2629 37.7594 38.0329L46.3231 42.754Z"
                    fill="#EFCB4B"
                  />
                  <path
                    d="M33.35 20.8332C30.1642 20.5031 26.9515 21.1173 24.1123 22.5993C20.165 24.6976 17.609 29.4716 23.4866 32.8884C21.4648 34.0097 19.4334 35.1214 17.4212 36.2571C16.8773 36.5651 16.3959 36.7384 15.9434 36.1416C16.7906 35.5882 16.5306 34.6979 16.5354 33.952C16.5354 28.4272 16.5355 22.8833 16.5115 17.3778C22.0714 14.5914 27.7227 11.9686 32.9697 8.58545C33.9325 10.9484 33.2248 13.3979 33.3788 15.8041C33.4847 17.4885 33.3693 19.1632 33.35 20.8332Z"
                    fill="#2C064C"
                  />
                  <path
                    d="M26.5382 31.5794C24.9015 30.7083 23.0868 29.895 23.3178 27.6091C23.5393 25.405 25.2434 24.3703 27.063 23.6388C29.0575 22.7514 31.302 22.5997 33.3978 23.2105C34.1247 26.7814 32.517 28.8892 29.2243 30.0587C28.2712 30.4148 27.4336 31.0645 26.5382 31.5794Z"
                    fill="#2C064C"
                  />
                  <path
                    d="M53.5483 31.4158C52.7415 32.0732 51.8073 32.5566 50.8045 32.8355C49.5529 32.0029 47.8488 31.512 48.2243 29.4667L48.2532 29.5052C50.4627 28.9181 51.772 30.7998 53.5483 31.4158Z"
                    fill="#EFCB4B"
                  />
                  <path
                    d="M48.2245 29.4523L48.2727 29.0962L48.0127 29.2165L48.2534 29.4908L48.2245 29.4523Z"
                    fill="#393636"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_2">
                    <rect width="80" height="63" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            heading="Fastest Blockchain in the World"
            text=" Aspiring to be ranked among the top advisory firms across the
          nation."
            number="1"
          />
          <Aboutcard
            icon={
              <svg
                width="60"
                height="50"
                viewBox="0 0 60 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4747 49.3557H8.79957C6.33442 49.3557 5.65342 48.6576 5.65098 46.1217C5.65098 38.1503 5.67787 30.1764 5.62661 22.2025C5.62661 20.9089 6.0415 20.0986 7.11542 19.403C9.08754 18.1216 9.05336 18.0654 7.77685 16.1714C7.53278 15.8004 7.24721 15.4392 7.04463 15.0536C6.64191 14.3213 6.21726 13.9967 5.3093 14.4409C4.25978 14.9559 3.28593 14.4898 2.62449 13.6209C1.82953 12.5885 1.09604 11.5103 0.427827 10.3918C-0.304394 9.18359 -0.0969101 7.98275 1.06 7.15778C3.54223 5.38581 6.05619 3.65777 8.62629 2.00295C9.89059 1.1853 11.1622 1.527 12.0433 2.75225C12.7121 3.67485 13.3344 4.62917 13.9544 5.5835C14.6866 6.69892 14.7037 7.81922 13.7835 8.82969C13.3442 9.31784 13.2808 9.72056 13.6933 10.2111C13.7177 10.2429 13.7371 10.2795 13.7591 10.3137C14.3644 11.1777 14.7916 12.4249 15.619 12.8081C16.6343 13.2767 17.3275 11.8904 18.211 11.3729C18.8498 11.0016 19.6001 10.87 20.3272 11.0019C23.1389 11.4242 25.277 10.5138 27.1344 8.30249C28.7989 6.32061 30.8711 4.68776 32.7041 2.84012C33.3427 2.18011 34.1089 1.65691 34.956 1.30235C35.8032 0.947792 36.7136 0.769285 37.632 0.77769C40.9245 0.74352 44.222 0.731316 47.5145 0.77769C50.026 0.81186 51.9493 1.94192 53.2356 4.12638C54.2265 5.80805 55.2395 7.47752 56.2402 9.1543C56.7796 10.0574 57.2702 10.9678 58.2709 11.5145C58.9567 11.8904 59.1325 12.6543 59.1325 13.428C59.1325 24.6148 59.1325 35.8015 59.1325 46.9882C59.1325 48.643 58.283 49.3459 56.4183 49.3484C48.429 49.3581 40.4478 49.3606 32.4747 49.3557ZM51.2684 43.0757C51.7004 43.105 51.9494 42.9683 52.0519 42.673C52.2227 42.1848 51.8908 41.9114 51.5393 41.6967C49.8894 40.6545 48.2468 39.6001 46.5773 38.592C45.9232 38.1942 45.601 37.7183 45.601 36.9226C45.6271 33.0174 45.6271 29.1122 45.601 25.207C45.5779 24.8651 45.6567 24.524 45.8274 24.2268C45.9981 23.9297 46.2532 23.6898 46.5602 23.5376C48.2053 22.5613 49.8137 21.5362 51.4417 20.5257C51.8835 20.2499 52.2691 19.896 51.9615 19.3371C51.6052 18.6951 51.1342 19.0442 50.7192 19.3029C48.8911 20.4403 47.0581 21.5606 45.2495 22.7419C44.4647 23.2501 43.5431 23.5057 42.6087 23.4741C36.3897 23.4497 30.1609 23.4375 23.9516 23.4741C22.6921 23.5188 21.4514 23.1577 20.4126 22.4441C18.8725 21.3873 17.2396 20.4622 15.6776 19.4371C15.0088 18.9978 14.423 19.1931 14.0935 19.7178C13.7274 20.3109 14.4889 20.3817 14.7989 20.5794C16.6131 21.7412 18.4437 22.8753 20.2905 23.9818C20.5952 24.1432 20.8469 24.3891 21.0154 24.69C21.1838 24.9909 21.2618 25.334 21.24 25.6781C21.2221 29.2953 21.2221 32.9133 21.24 36.5321C21.24 37.2936 20.9959 37.8281 20.3101 38.2406C18.9408 39.0387 17.6106 39.9052 16.2731 40.7521C15.4823 41.2525 14.6988 41.7601 13.9251 42.2873C13.6444 42.4801 13.4491 42.7608 13.6542 43.1196C13.7376 43.2632 13.8736 43.3689 14.0333 43.4144C14.1931 43.4599 14.3642 43.4418 14.5109 43.3637C14.8876 43.2146 15.2495 43.0308 15.5921 42.8145C17.43 41.6893 19.2679 40.5642 21.0886 39.4146C21.7367 38.9928 22.4951 38.772 23.2683 38.78C29.8957 38.7979 36.5215 38.7979 43.1456 38.78C43.7972 38.7626 44.4395 38.9365 44.9933 39.2803C46.7164 40.3567 48.4542 41.4087 50.192 42.4533C50.5801 42.7071 50.9755 42.9146 51.2782 43.0757H51.2684ZM30.095 10.9849H32.9604C39.1827 10.9849 45.4025 10.9849 51.6199 10.9849C51.9762 10.9849 52.4424 11.1289 52.6572 10.8116C52.9354 10.3942 52.4717 10.0793 52.2813 9.74497C51.5759 8.50995 50.8168 7.30423 50.1261 6.06189C49.5281 5.01482 48.6617 4.46321 47.4413 4.46321H37.5636C36.7606 4.46321 36.0162 4.66579 35.4549 5.26133C33.6878 7.13582 31.9207 9.03959 30.1048 10.9849H30.095Z"
                  fill="url(#paint0_linear_126_58)"
                />
                <path
                  d="M33.4682 24.8677C36.5581 24.8677 39.6457 24.8995 42.743 24.8482C43.812 24.8311 44.2831 25.1289 44.2636 26.2883C44.205 29.5369 44.2172 32.7879 44.2636 36.0366C44.2636 37.0348 43.9146 37.4058 42.9139 37.4009C36.6168 37.3733 30.3196 37.3733 24.0225 37.4009C23.0657 37.4009 22.6264 37.1227 22.6411 36.078C22.6899 32.7879 22.685 29.4881 22.6411 26.2077C22.6264 25.2094 22.9681 24.8409 23.9762 24.8555C27.132 24.8946 30.3001 24.8677 33.4682 24.8677ZM36.2994 32.5414C35.865 30.7524 34.7886 29.0365 33.7074 27.3256C33.5536 27.0815 33.2534 27.0132 33.1069 27.2743C32.0843 29.0951 30.5955 30.7328 30.5881 32.9759C30.5881 34.3744 32.0086 35.5875 33.4584 35.5728C34.9082 35.5582 36.2823 34.2353 36.2994 32.5414Z"
                  fill="url(#paint1_linear_126_58)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_126_58"
                    x1="29.5665"
                    y1="0.747314"
                    x2="29.5665"
                    y2="49.3581"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#440161" />
                    <stop offset="1" stop-color="#0D1231" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_126_58"
                    x1="33.4524"
                    y1="24.8475"
                    x2="33.4524"
                    y2="37.401"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#440161" />
                    <stop offset="1" stop-color="#0D1231" />
                  </linearGradient>
                </defs>
              </svg>
            }
            heading="Zero Gas Fees"
            text=" Dedicated to providing personal attention to all our clients."
            number="2"
          />
          <Aboutcard
            icon={
              <svg
                width="48"
                height="57"
                viewBox="0 0 48 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.9309 9.12303C34.1792 9.75206 34.4629 10.4711 35.6778 10.4053C37.411 9.93175 39.0893 9.27647 40.6848 8.45043C41.8739 7.83495 41.69 7.27794 40.9159 6.46202C39.1391 4.5963 36.9894 3.24278 34.7616 2.00646C33.4769 1.2971 32.0813 0.87877 30.6855 0.460435L30.6844 0.460068C30.3107 0.348008 29.9369 0.235947 29.5652 0.118272C29.1363 -0.018081 28.5626 -0.126724 28.3009 0.329941C28.1106 0.661851 28.3586 0.824692 28.5981 0.981797C28.6882 1.04088 28.7771 1.09923 28.8411 1.16539C29.4469 1.73143 30.0215 2.33019 30.5621 2.95885C31.9453 4.81322 33.0643 6.85069 33.8872 9.01293L33.9309 9.12303ZM12.5337 10.4582C10.5509 9.9597 8.52635 9.29698 6.74413 8.09947C6.04747 7.63158 6.52306 7.13365 6.91417 6.72423C6.9514 6.68517 6.9879 6.64696 7.02257 6.6096C8.69347 4.76891 10.7124 3.39317 12.8706 2.2152C14.4072 1.38023 16.0622 0.873032 17.7123 0.367539C17.9552 0.293198 18.198 0.218858 18.4402 0.143418C18.8746 0.00975106 19.4538 -0.135146 19.7045 0.357774C19.8887 0.720078 19.5958 0.903428 19.3205 1.07567C19.2213 1.1378 19.1244 1.19847 19.0528 1.26561C16.7944 3.35704 15.2989 5.92455 14.2018 8.765C14.1749 8.83666 14.1488 8.90953 14.1225 8.9829C13.8741 9.67687 13.6116 10.4103 12.5337 10.4582ZM23.4752 7.2213L23.4728 7.70396C23.4678 8.63231 23.4629 9.56053 23.4776 10.4889C23.5028 11.6028 23.0182 12.1291 21.8791 12.0094C21.6239 11.9822 21.3685 11.9558 21.113 11.9298C20.8118 11.8993 20.5105 11.8694 20.2092 11.8395L20.0803 11.8266C18.9292 11.7128 17.7777 11.5989 16.6299 11.4524C14.7418 11.2157 14.4021 10.6169 15.1595 8.92381C16.2178 6.54845 17.329 4.20921 19.2949 2.40465C19.9701 1.76769 20.7381 1.23717 21.5729 0.831284C22.787 0.257554 23.4359 0.669785 23.4637 2.00084C23.4899 3.04552 23.4855 4.08434 23.4811 5.12364C23.4794 5.51939 23.4776 5.91527 23.4776 6.31163C23.4776 6.61485 23.4767 6.91808 23.4752 7.2213ZM40.7074 22.9306C40.921 22.932 41.1348 22.9333 41.3485 22.9344L41.4866 22.9352C41.6227 22.9357 41.7589 22.9361 41.8951 22.9364L42.147 22.9368C42.5397 22.9368 42.9324 22.9385 43.3251 22.94C44.2775 22.9441 45.2297 22.9481 46.182 22.9285C47.8779 22.9145 48.1174 22.7696 47.9587 21.0989C47.5426 16.8347 45.9618 12.7673 43.389 9.34154C42.8961 8.66759 42.3641 8.73168 41.6958 9.0797C40.1081 9.94225 38.4335 10.6339 36.6999 11.1433C35.2825 11.5331 34.8815 12.001 35.2018 13.3933C35.8447 16.0453 36.204 18.758 36.2738 21.4859C36.2933 22.5664 36.8002 22.9646 37.8332 22.9368C38.791 22.9182 39.7488 22.9244 40.7074 22.9306ZM5.75536 22.9369C5.33507 22.9369 4.91478 22.9328 4.49437 22.9288C3.52233 22.9194 2.55028 22.91 1.57823 22.9508C0.344591 23.0065 -0.0926651 22.4551 0.0159775 21.2799C0.229234 19.0255 0.757921 16.8124 1.58666 14.7051C2.32591 12.9079 3.26769 11.2009 4.39366 9.6173C4.95067 8.80126 5.42406 8.61192 6.32066 9.07982C8.08348 9.99596 9.88524 10.8286 11.8485 11.2659C12.9289 11.508 13.0154 12.402 12.8204 13.2569C12.175 15.9979 11.8065 18.7967 11.7203 21.6113C11.6981 22.5414 11.2497 22.9452 10.328 22.9341C9.30821 22.923 8.28588 22.9266 7.2661 22.9304H7.26427H7.26244C6.94896 22.9315 6.63573 22.9326 6.32298 22.9333C6.12901 22.9338 5.93517 22.9341 5.74144 22.9341L5.75536 22.9369ZM24.0011 29.2583C24.2245 29.2737 24.4479 29.2887 24.6713 29.3037C28.5012 29.5609 32.3326 29.8183 35.8086 31.7814C37.9612 32.9983 38.3315 34.2598 37.1257 36.3901C37.1147 36.4089 37.1023 36.4287 37.089 36.449L37.0763 36.4682L37.0506 36.5062C36.9326 36.6804 36.7986 36.8784 37.02 36.9665C38.3259 37.4754 38.1354 38.4358 37.9586 39.3265L37.9582 39.328C37.9165 39.5384 37.8756 39.745 37.8553 39.9407C37.7217 41.0991 36.7805 41.8287 35.8003 42.4247C34.5207 43.1731 33.1305 43.7135 31.6816 44.026C27.707 44.9623 23.5939 45.1586 19.5482 44.6052C17.0809 44.271 14.6304 43.7698 12.4082 42.5305C10.6984 41.5726 9.80724 40.2108 10.0633 38.2086C10.0709 38.1466 10.0744 38.0733 10.078 37.9985V37.996C10.0871 37.7959 10.097 37.5857 10.1859 37.5514C11.3231 37.0766 10.9562 36.5411 10.5915 36.0091L10.5904 36.0077C10.4742 35.838 10.3584 35.6687 10.2917 35.5018C9.7849 34.2235 10.4087 32.8701 11.9375 31.9233C13.5987 30.8998 15.4496 30.2225 17.379 29.9322C17.771 29.8714 18.1636 29.8061 18.557 29.7407C20.3467 29.4427 22.1543 29.142 24.0011 29.2583ZM23.1155 38.228C28.337 38.228 32.6228 37.4177 34.7058 36.1645C34.8025 36.1067 34.9042 36.0508 35.0072 35.9941L35.0112 35.9919C35.5657 35.6871 36.1538 35.3636 36.1678 34.6301C36.183 33.888 35.635 33.5729 35.0959 33.2628L35.0893 33.2591L35.0586 33.2412L35.0359 33.2281L34.9743 33.1926C34.9431 33.1743 34.9121 33.156 34.8813 33.1376C34.8574 33.1232 34.8336 33.1086 34.81 33.094C34.7543 33.0593 34.6998 33.0239 34.6473 32.987C34.4858 32.8962 34.3183 32.8161 34.1461 32.7477C31.9907 31.6643 29.6235 31.3802 27.2871 31.1409C22.7312 30.6673 18.2198 30.9459 13.9202 32.7421C13.8302 32.7798 13.7372 32.8171 13.6427 32.8551C12.8225 33.1843 11.8923 33.5577 11.8623 34.5716C11.833 35.5659 12.749 35.9615 13.5461 36.3056L13.6633 36.3564C13.698 36.3714 13.7323 36.3865 13.7661 36.4015L13.8646 36.4458C17.095 37.9189 20.5675 38.1028 23.1155 38.228ZM22.7825 50.647C22.5123 50.6173 22.2418 50.5882 21.9709 50.5592C18.6172 50.1992 15.2204 49.8346 12.1105 48.0693C10.2252 46.9972 9.84374 45.4127 10.0609 43.4745C10.1528 42.6669 10.5204 42.5249 11.1748 42.9537C15.5107 45.8137 20.3868 45.8778 25.3298 45.8165C28.3235 45.7775 31.2252 45.4684 34.0461 44.4241C34.9944 44.0554 35.897 43.5788 36.7363 43.0039C37.5133 42.4999 37.8837 42.6446 37.9756 43.6138C38.2318 46.2258 37.3099 47.621 34.5279 48.7767C31.6063 49.9817 28.5244 50.3043 25.3739 50.6341C24.9057 50.6831 24.4361 50.7323 23.9653 50.7845C23.5724 50.7357 23.1778 50.6905 22.7825 50.647ZM12.7395 54.0733C16.3291 55.8221 20.1554 56.3011 24.171 56.0227C28.0056 56.3541 31.7734 55.7971 35.2989 54.0511C37.0868 53.1766 38.2258 51.826 37.9752 49.6372C37.8359 48.4007 37.5825 48.1975 36.5549 48.8574C35.4879 49.5065 34.3437 50.0191 33.1492 50.3835C29.6682 51.5309 26.073 51.6813 22.4527 51.5782C18.529 51.4668 14.7306 50.8541 11.3137 48.7461C10.5117 48.2532 10.1442 48.4731 10.0466 49.3977C9.81835 51.567 10.5952 53.0318 12.7395 54.0733ZM42.2527 24.0117C43.5504 24.0117 44.8481 23.9978 46.1514 24.0117C47.786 24.0312 48.1007 24.2707 47.9753 25.8636C47.688 29.2807 46.6415 32.5907 44.9121 35.5519C44.7728 35.7942 44.6086 36.0196 44.475 36.2619C43.0198 38.8885 42.36 38.5174 40.2336 37.322L40.1924 37.2988L39.9713 37.1748L39.8327 37.0974C39.078 36.6797 38.9665 35.8944 39.0752 35.1481C39.3536 33.2265 38.7828 31.8063 36.9059 31.0294C36.0926 30.6924 35.87 30.0018 36.026 29.197C36.2202 28.0087 36.3133 26.8059 36.3044 25.6018C36.3266 24.5436 36.8363 23.9839 37.9474 24.0006C39.3816 24.0312 40.8185 24.0145 42.2527 24.0117ZM7.25939 24.0166C6.79527 24.0141 6.33116 24.0117 5.86705 24.0117C4.52196 24.0089 3.17967 23.995 1.8402 24.0173C0.227892 24.0395 -0.0868057 24.2847 0.0524765 25.9026C0.423936 30.1167 1.93529 34.1503 4.42455 37.5708C4.43297 37.5842 4.44164 37.5974 4.45055 37.6105C4.46422 37.6306 4.47838 37.6504 4.49303 37.6698C4.51366 37.6971 4.53526 37.7237 4.55785 37.7495C4.67626 37.8845 4.81981 37.9963 4.98119 38.0782C5.20921 38.194 5.46434 38.2457 5.71947 38.228C7.54357 38.1445 9.0974 36.6658 8.9359 34.8445C8.77428 33.0233 9.37584 31.8175 11.03 31.0907C11.7346 30.7843 12.183 30.2691 12.013 29.4532C11.7811 28.3417 11.7545 27.2196 11.7279 26.0962L11.7226 25.8735L11.719 25.7281L11.7151 25.5824C11.6872 24.5102 11.1413 23.9895 10.0442 24.0117C9.11595 24.0266 8.18761 24.0216 7.25939 24.0166ZM17.9779 22.9369C17.5621 22.9369 17.1451 22.9332 16.728 22.9294C15.8935 22.922 15.0586 22.9145 14.2324 22.9369C13.0627 22.9758 12.4863 22.5079 12.5893 21.2994L12.5992 21.1874C12.8409 18.4204 13.0825 15.6549 13.9233 12.9813C14.1405 12.2934 14.5666 11.8924 15.2517 12.1013C16.5006 12.4856 17.787 12.5718 19.074 12.6579C20.1373 12.7291 21.201 12.8004 22.2441 13.0398C23.0629 13.2291 23.4835 13.5021 23.4779 14.3653C23.4648 16.7788 23.4648 19.1848 23.4779 21.5835C23.4779 22.522 23.0657 22.9369 22.1411 22.9285C21.2129 22.9173 20.2845 22.921 19.3563 22.9248C18.8922 22.9266 18.4281 22.9285 17.964 22.9285L17.9779 22.9369ZM28.641 22.9324C28.8315 22.9333 29.0221 22.9343 29.2126 22.935C29.4695 22.936 29.7263 22.9368 29.9831 22.9368L34.0017 22.9256C34.7953 22.9228 35.4497 22.6778 35.394 21.7644C35.1991 18.7234 34.9652 15.6825 34.0017 12.7612C33.9872 12.6991 33.9664 12.6388 33.9397 12.5812C33.912 12.5213 33.8778 12.4645 33.8378 12.4116C33.8082 12.3724 33.7756 12.3358 33.7403 12.302C33.7027 12.266 33.6621 12.233 33.6189 12.2037C33.5953 12.1877 33.5709 12.1727 33.5458 12.1589C33.4317 12.0962 33.3058 12.0581 33.1761 12.0472C33.0465 12.0362 32.9159 12.0528 32.793 12.0957C31.5099 12.489 30.189 12.5797 28.8672 12.6704H28.8661C27.7925 12.744 26.7185 12.8177 25.664 13.0536C24.784 13.2485 24.5222 13.6608 24.5222 14.4628C24.5389 16.8242 24.5502 19.1828 24.5222 21.5444C24.5083 22.5636 24.9817 22.9535 25.9564 22.9368C26.4682 22.9293 26.98 22.9276 27.4918 22.9282C27.8749 22.9287 28.2579 22.9305 28.641 22.9324ZM24.536 2.32945V6.22813C24.536 6.38878 24.5362 6.54955 24.5367 6.71043L24.5382 7.16588L24.5397 7.53319V7.53429C24.5438 8.53038 24.548 9.52916 24.5305 10.5306C24.4999 11.6808 25.0569 12.1291 26.1708 12.001C26.5091 11.963 26.8479 11.9266 27.1869 11.8902L27.4879 11.8579L27.819 11.822C27.9516 11.8075 28.0845 11.7928 28.2173 11.7779C28.417 11.7556 28.6167 11.7327 28.8164 11.7087C29.1285 11.6714 29.4404 11.6318 29.7519 11.5889C30.0141 11.556 30.2789 11.5415 30.5438 11.527C31.1539 11.4935 31.7649 11.4601 32.3474 11.2018C33.0659 10.8843 33.4864 10.5752 33.0909 9.63951C32.9949 9.41039 32.9004 9.18077 32.806 8.9514C32.3531 7.85082 31.9021 6.75487 31.2892 5.74083C30.1529 3.87218 28.8608 2.14012 26.8696 1.05406C25.2295 0.160142 24.5527 0.508164 24.536 2.32945ZM18.1284 24.0089C19.3314 24.0089 20.54 24.0508 21.7485 24.0089C22.9571 23.9671 23.5058 24.449 23.5058 25.716C23.5058 27.9452 23.4829 27.9485 21.4809 28.2355L21.4663 28.2377C21.3768 28.2504 21.2834 28.2637 21.186 28.2779C20.7329 28.3451 20.2778 28.405 19.8221 28.4651C18.1803 28.6813 16.531 28.8985 14.9398 29.4587C13.3802 30.0157 13.099 29.7539 12.7898 28.1443C12.0547 24.332 12.3165 24.0173 16.1902 24.0173L18.1284 24.0089ZM35.3977 26.7901C35.3952 26.6771 35.3906 26.5638 35.3906 26.4512C35.463 24.2623 35.2375 24.0173 33.11 23.9978C32.3343 23.9978 31.5593 24.0036 30.7848 24.0095C29.2374 24.0212 27.6921 24.0331 26.1479 23.9978C24.6832 23.9643 24.5077 24.8109 24.5244 25.975C24.5522 27.941 24.6638 28.0886 26.1396 28.2195C28.2107 28.3579 30.2629 28.7012 32.2662 29.2442C34.767 29.9851 35.1623 29.7595 35.3906 27.1445C35.4006 27.0275 35.4004 26.9089 35.3977 26.7901Z"
                  fill="url(#paint0_linear_62_34)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_62_34"
                    x1="14.5"
                    y1="2"
                    x2="35.5"
                    y2="54.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5E0484" />
                    <stop offset="1" stop-color="#0C1330" />
                  </linearGradient>
                </defs>
              </svg>
            }
            heading="Tokenize any asset
            you want"
            text=" Catering to the need of all types of Business , Corporations & Institutions."
            number="3"
          />
        </div>
      </div>
    </>
  );
}
