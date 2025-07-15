export const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Categories Section */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              Категории
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Мясо
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Наборы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Мясо
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Мясо
                </a>
              </li>
            </ul>
          </div>

          {/* About Company Section */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              О компании
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Помощь</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Оплата
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#B7B7B7] text-xs hover:text-white transition-colors"
                >
                  Возврат
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              Подпишитесь на новости
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Ваш E-mail"
                  className="w-full bg-[#202020] text-white placeholder-[#B7B7B7] px-5 py-2.5 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-[#373737]"
                />
              </div>
              <button className="bg-[#373737] text-white px-6 py-2 rounded-2xl text-xs font-semibold hover:bg-[#4a4a4a] transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center md:justify-start mb-8">
          <div className="flex space-x-4">
            {/* Telegram Icon */}
            <a
              href="#"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 4.86644C16.9837 5.11621 16.9402 5.36362 16.8701 5.60454L16.6267 6.71954L16.3832 7.77172C16.3832 8.13292 16.2371 8.49412 16.156 8.83961C16.0748 9.18511 15.9937 9.5463 15.9287 9.8918C15.8638 10.2373 15.8151 10.41 15.7502 10.677C15.6853 10.944 15.5879 11.2267 15.5879 11.4779L15.1983 13.2525C15.1009 13.6765 15.0198 14.0848 14.9224 14.4931C14.825 14.9015 14.7439 15.3098 14.6627 15.7024C14.6173 15.9749 14.5467 16.243 14.4517 16.5033C14.4074 16.6076 14.3413 16.7019 14.2575 16.7803C14.1737 16.8587 14.074 16.9194 13.9648 16.9587C13.7963 17.0138 13.6138 17.0138 13.4454 16.9587C13.2527 16.8671 13.0771 16.745 12.926 16.5975L10.329 14.7758L9.59854 14.2576C9.59854 14.2576 9.50116 14.2576 9.45246 14.2576L7.99165 15.6239L7.6021 15.9693C7.53122 16.036 7.44738 16.0883 7.35544 16.1234C7.26349 16.1584 7.16527 16.1755 7.06647 16.1735C7.06647 16.1735 7.06647 16.1735 7.06647 16.0793V15.3412L7.16385 14.2733C7.16385 14.1162 7.16385 13.9592 7.16385 13.8022V13.0641C7.15641 12.928 7.15641 12.7918 7.16385 12.6557C7.15314 12.6309 7.14762 12.6042 7.14762 12.5772C7.14762 12.5503 7.15314 12.5236 7.16385 12.4987L8.30004 11.525L9.11161 10.8183L10.4263 9.67194L11.5788 8.74539L12.6825 7.78743L13.348 7.20637L14.0459 6.5939C14.0916 6.56567 14.1304 6.52816 14.1595 6.48397C14.1699 6.47513 14.1782 6.46426 14.1839 6.45207C14.1896 6.43989 14.1925 6.42667 14.1925 6.4133C14.1925 6.39994 14.1896 6.38672 14.1839 6.37454C14.1782 6.36235 14.1699 6.35148 14.1595 6.34264C14.1066 6.32689 14.0501 6.32689 13.9972 6.34264C13.8506 6.37942 13.7128 6.44342 13.5914 6.53109L10.9295 8.10151L9.42 9.01236L7.09893 10.4729L5.71927 11.3052L5.24856 11.5879C5.23087 11.5962 5.21144 11.6005 5.19176 11.6005C5.17207 11.6005 5.15265 11.5962 5.13495 11.5879L3.51182 11.0853L1.62899 10.5514C1.45738 10.4923 1.29386 10.4132 1.14205 10.3158C1.09751 10.279 1.06174 10.2332 1.03722 10.1817C1.0127 10.1302 1 10.0741 1 10.0174C1 9.96072 1.0127 9.90468 1.03722 9.85317C1.06174 9.80167 1.09751 9.75591 1.14205 9.71905C1.32937 9.54352 1.55764 9.41424 1.80754 9.34215L4.06368 8.49412L6.7743 7.48905L8.86814 6.71954L11.3353 5.80869L13.4454 5.02348L15.458 4.28538C15.6504 4.18513 15.8513 4.10107 16.0586 4.03411C16.1886 3.99304 16.3281 3.98897 16.4605 4.02238C16.5928 4.05578 16.7125 4.12527 16.8052 4.22256C16.9188 4.34415 16.9873 4.49885 17 4.66228V4.86644Z"
                  fill="#141414"
                />
              </svg>
            </a>

            {/* VK Icon */}
            <a
              href="#"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8207 15.9015C17.9722 15.903 17.1232 15.8946 16.2747 15.9067C16.0346 15.9105 15.9257 15.8178 15.8374 15.6093C15.3595 14.4803 14.692 13.4911 13.6164 12.812C12.9928 12.4182 12.3133 12.1742 11.5872 12.034C11.351 11.9884 11.2822 12.0562 11.2833 12.2806C11.2887 13.3656 11.2838 14.4507 11.2827 15.5357C11.2822 15.9046 11.2822 15.9062 10.9089 15.9089C8.91329 15.9221 7.03421 15.5177 5.36157 14.4041C4.03028 13.5175 3.06093 12.3288 2.37822 10.9119C1.63049 9.35841 1.27721 7.70968 1.15476 6.0059C1.13417 5.71585 1.09949 5.42686 1.10166 5.13522C1.10274 4.98014 1.16831 4.91187 1.32923 4.91239C2.19617 4.91504 3.0631 4.91557 3.93004 4.91239C4.1717 4.91134 4.17441 5.07859 4.18199 5.23949C4.208 5.82118 4.25243 6.40128 4.35646 6.97503C4.60679 8.35964 5.00612 9.6908 5.89527 10.8319C6.43494 11.5248 7.10086 12.0689 7.93041 12.4066C8.32053 12.5654 8.36658 12.5362 8.36658 12.1303C8.36767 10.9923 8.36712 9.85435 8.36712 8.71638C8.36712 7.57841 8.37308 6.42298 8.36279 5.27601C8.36008 5.02249 8.44732 4.93674 8.70631 4.94151C9.41937 4.95421 10.133 4.94521 10.846 4.94574C11.2535 4.94627 11.2806 4.97009 11.2811 5.36123C11.2833 6.54313 11.2822 7.72556 11.2844 8.90745C11.2849 9.29013 11.2876 9.29119 11.6523 9.19327C12.8129 8.88046 13.6652 8.15745 14.3701 7.24073C14.8561 6.60876 15.2452 5.92492 15.4852 5.16645C15.541 4.99073 15.631 4.9071 15.8314 4.90922C16.6079 4.91822 17.3849 4.91822 18.1613 4.90975C18.403 4.9071 18.4523 4.99179 18.4052 5.21356C18.1131 6.59235 17.4033 7.75414 16.4724 8.8016C15.9848 9.35047 15.4202 9.81624 14.8047 10.2238C14.5587 10.3868 14.5603 10.4 14.8209 10.5461C16.8842 11.7 18.3022 13.3704 19.0418 15.5828C19.1453 15.8919 19.1393 15.9004 18.8207 15.9009V15.9015Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#373737] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            <div className="space-y-1">
              <p className="text-white text-xs">Политика конфиденциальности</p>
              <p className="text-white text-xs">Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};