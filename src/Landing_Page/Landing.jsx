import React from "react";

function Landing() {
  return (
    <>
      <div id="__next">
        <div className="bg-BackgoundGreen h-[36px] relative z-10">
          <div className="Container m-auto flex justify-center gap-[50px] items-center p-2">
            <a href="tel:+91 90329 84111">
              <h2 className="text-customColor flex justify-center headerfontsize cursor-pointer">
                +91 90329 84111
              </h2>
            </a>
            <div className="bg-customColor w-5px h-20px notificationline"></div>
            <a href="mailto: care@bisibisi.in">
              <h2 className="text-customColor flex justify-center headerfontsize cursor-pointer">
                care@bisibisi.in
              </h2>
            </a>
            <div className="bg-customColor w-5px h-20px notificationline"></div>
            <h2 className="text-customColor d-flex justify-center headerfontsize cursor-pointer">
              Opening hours 11:30 am - 11:30 pm
            </h2>
            <h2 className="text-customColor d-flex justify-center headerfontsize cursor-pointer">
              <a
                target="_blank"
                className="flex"
                href="https://www.instagram.com/bisibisi_eats/"
              >
                <img src="images/instalogodes.svg" alt="Instagram Logo" />
                �&nbsp;@bisibisi_eats
              </a>
            </h2>
          </div>
        </div>
        <div className="sticky top-0 z-50 bg-custom-gradient-180">
          <header className="absolute left-[50%] translate-x-[-50%] w-full z-50 p-3 pt-5 h-[66px]">
            <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
              <nav className="max-w-[865px] m-auto flex justify-between">
                <ul className="flex justify-between">
                  <li className="min-w-[110px] text-center">
                    <a
                      className="font-trap text-[14px] font-medium leading-[24px] text-[#fff]"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="min-w-[110px]">
                    <a
                      className="font-trap text-[14px] font-medium leading-[24px] text-[#fff]"
                      href="/about"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="menusec">
                    <a
                      className="font-trap text-[14px] font-medium leading-[24px] text-[#fff] block marker:"
                      href="/#"
                    >
                      Our Menu
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ExpandMoreIcon"
                      >
                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <span className="relative z-20">
                  <a href="/"></a>
                </span>
                <ul className="flex justify-between">
                  <li className="relative min-w-[110px] locations">
                    <a
                      className="font-trap text-[14px] font-medium leading-[24px] text-[#fff] block"
                      href="/#"
                    >
                      <span>Locations</span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ExpandMoreIcon"
                      >
                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="min-w-[110px] text-center">
                    <a
                      className="font-trap text-[14px] font-medium leading-[24px] text-[#fff]"
                      href="/catering"
                    >
                      Catering
                    </a>
                  </li>
                  <li className="min-w-[110px] text-center">
                    <a
                      className="font-trap text-[14px] font-medium leading-[24px] text-[#fff]"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
        <div></div>
        <div></div>

        <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
          <div className="HomeDrawer-wrap"></div>
          <div></div>
          <div></div>
        </div>
        <main>
          <div>
            <div className="vidimg1">
              <video
                muted=""
                autoplay=""
                loop=""
                id="landingVideo"
                playsinline=""
                className="newhomevideocontrol1"
                preload="none"
                poster="/images/webp/homevidoneposter.webp"
              >
                <source src="media/BisiBisiHomeVideo.webm" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="bg-[#F7F5F2] py-2 relative pt-[250px]">
            <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
              <div className="text-center">
                <div className="text-[128px] font-bold text-BackgoundGreen leading-[132px] smallmob">
                  COMFORT FOOD,
                  <br />
                  ON THE GO
                </div>
                <div className="text-[18px] px-[180px] text-BackgoundGreen pt-3">
                  A hot &amp; fresh homemade meal brings comfort and cures
                  hunger anytime. Carefully picked, traditionally cooked and
                  served with love, every dish at Bisi Bisi aims to match the
                  happy-go-lucky beat of a foodie's heart!
                </div>
              </div>
            </div>

            <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
              <div className="py-[100px] my-[70px] relative">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6 css-sayu3r">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-rttrlq">
                    <img
                      alt="thaliimg"
                      loading="lazy"
                      width="603"
                      height="592"
                      decoding="async"
                      data-nimg="1"
                      srcset="image_1 1x, image 2x"
                      src="image"
                    />
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-14kf0em">
                    <div className="text-[48px] font-bold text-BackgoundGreen leading-[52px]">
                      South Indian Thalis <br />
                      Always Fresh, <br />
                      Always Hot!
                    </div>
                    <div className="text-[18px] text-BackgoundGreen pt-3 w-81">
                      <p className="w-11/12">
                        Savour the celebration of simple delicacies. Bisi Bisi's
                        Thalis are a reflection of the care and taste of home.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[30px] right-0">
                  <div className="spin-div relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="175"
                      height="175"
                      fill="none"
                      viewBox="0 0 175 175"
                    >
                      <g fill="#231F20" clip-path="url(#clip0_35_988)">
                        <path d="M87.484 157.505c-38.597 0-69.978-31.381-69.978-69.978 0-38.597 31.381-70.021 69.978-70.021 38.597 0 69.979 31.381 69.979 69.978 0 38.597-31.382 69.978-69.979 69.978v.043zm0-138.932c-37.999 0-68.91 30.912-68.91 68.911s30.911 68.911 68.91 68.911c37.999 0 68.911-30.912 68.911-68.911 0-38-30.912-68.911-68.91-68.911z"></path>
                        <path d="M87.484 175.01C39.237 175.01 0 135.73 0 87.484 0 39.237 39.237 0 87.484 0c48.246 0 87.483 39.237 87.483 87.484 0 48.246-39.237 87.483-87.483 87.483v.043zm0-173.943c-47.649 0-86.417 38.768-86.417 86.417 0 47.648 38.768 86.416 86.417 86.416 47.648 0 86.416-38.768 86.416-86.416 0-47.649-38.768-86.417-86.416-86.417z"></path>
                        <path d="M69.339 162.074c.341-1.751 1.537-1.836 3.373-1.495.299.043 1.025.214 1.665.342l1.153.256-1.452 7.344-2.732-.555c-1.495-.299-2.605-.812-2.306-2.349.17-.768.512-1.11 1.324-1.238.256 0 .597.086.853.171v-.214c-.213-.042-.597-.042-.81-.213-.684-.427-1.282-.982-1.068-2.007v-.042zm2.818 3.074c-.94-.171-1.75-.256-1.921.64-.171.897.512 1.025 1.537 1.238l1.323.257.384-1.879-1.323-.256zm.598-3.544c-1.196-.214-2.05-.427-2.263.726-.257 1.238.81 1.451 2.092 1.708.17 0 .597.128.982.213h.128l.47-2.348-1.41-.299zM65.58 166.642l-4.91-1.495.343-1.067 3.757 1.153.597-1.879-3.5-1.067.34-1.068 3.502 1.068.64-2.092-3.8-1.153.342-1.068 4.953 1.495-2.178 7.173h-.085zM54.18 160.579c.172.64.684 1.281 1.623 1.665.769.299 1.623.342 1.836-.213.47-1.068-4.141-2.861-3.117-5.252.556-1.366 2.22-1.494 3.928-.768 1.367.555 2.007 1.579 2.135 2.775h-1.11c-.085-.811-.683-1.409-1.58-1.793-1.024-.427-1.793-.299-2.049.256-.64 1.451 3.885 3.074 2.989 5.209-.513 1.238-2.178 1.28-3.63.64-1.28-.555-1.92-1.537-2.134-2.519H54.18zM51.79 152.979l-3.116 5.55 1.793 1.025-.555.982-4.654-2.604.555-.982 1.794 1.024 3.116-5.55 1.068.598v-.043zM38.554 146.276c.17-.384.683-1.836.683-1.836l.982.769c-.384.896-.683 1.537-.726 1.708-.427 1.024-.085 1.451.683 2.049.214.171.598.512.812.64l1.836-2.348.939.726-4.611 5.892-2.007-1.58c-1.28-1.025-2.135-2.135-1.067-3.501.597-.768 1.28-.768 2.05-.555.34.085.64.384.896.598l.128-.171c-.256-.213-.683-.427-.811-.726-.171-.469-.086-.939.213-1.622v-.043zm1.836 4.099l-1.025-.811c-.768-.598-1.665-.94-2.305-.086-.683.854-.128 1.495.726 2.135l1.024.811 1.623-2.049h-.043zM32.278 148.24l-3.672-3.543.768-.812 2.818 2.733 1.367-1.409-2.647-2.562.768-.811 2.647 2.562 1.495-1.58-2.861-2.775.769-.812 3.714 3.587-5.209 5.38.043.042zM24.892 137.78c-.17.64 0 1.451.683 2.22.513.64 1.281 1.025 1.75.64.898-.768-2.39-4.397-.426-6.105 1.11-.939 2.647-.342 3.843 1.067.939 1.11 1.067 2.306.64 3.459l-.982-.47c.299-.811.043-1.58-.555-2.348-.726-.854-1.494-1.068-1.921-.683-1.196 1.024 2.092 4.525.341 6.02-1.024.854-2.519.17-3.544-1.068-.896-1.067-1.024-2.263-.768-3.202l.982.427-.043.043zM26.13 129.88l-5.252 3.587 1.153 1.707-.896.641-2.989-4.398.897-.64 1.152 1.708 5.252-3.587.683.982zM15.627 127.148l-.683-1.238 5.209-6.105.598 1.11-1.836 2.135 1.238 2.262 2.775-.427.598 1.153-7.899 1.11zm1.025-1.537s-.427.256-.598.385l.085.17s.427-.299.64-.299l2.477-.256-1.067-1.964-1.537 1.964zM14.645 113.272c1.665-.683 3.074.256 3.757 1.964.683 1.665.3 3.331-1.366 3.971-2.05.854-4.526 1.793-4.526 1.793l-.427-1.11 4.27-1.708c.94-.384 1.452-1.494 1.025-2.561-.427-1.068-1.58-1.537-2.52-1.153-1.451.598-4.269 1.708-4.269 1.708l-.427-1.11 4.526-1.836-.043.042zM13.108 105.373c.384-.214 1.665-1.025 1.665-1.025l.342 1.196c-.854.469-1.452.854-1.58.896-.94.555-.896 1.11-.64 2.05.085.256.213.768.256 1.024l2.86-.768.3 1.153-7.216 1.964-.683-2.434c-.427-1.58-.47-2.989 1.238-3.458.94-.257 1.494.17 1.964.768.213.256.299.726.384 1.025h.214c-.086-.384-.3-.811-.214-1.153.128-.47.513-.811 1.153-1.195l-.043-.043zm-.982 4.398l-.341-1.239c-.257-.939-.769-1.708-1.836-1.451-1.025.299-.982 1.11-.726 2.134l.341 1.239 2.52-.683h.042zM6.575 101.317l-.213-1.41 6.916-4.055.214 1.28-2.434 1.452.385 2.562 2.775.512.213 1.281-7.856-1.579v-.043zm1.452-1.153s-.47.128-.683.171v.213c.256 0 .512-.128.726-.085l2.39.598-.341-2.22-2.092 1.323zM13.065 92.863v1.196l-7.429.299v-1.196l4.611-3.757c.342-.299.94-.512 1.367-.683l-.086-.213c-.427.17-.982.384-1.452.426l-4.696.214v-1.196l7.429-.299v1.196l-4.611 3.8c-.342.299-.94.512-1.366.683l.085.214c.427-.171.982-.385 1.452-.427l4.653-.214.043-.043zM13.023 83.513l-6.362-.385-.128 2.093-1.11-.086.341-5.337 1.11.085-.128 2.093 6.362.384-.085 1.195v-.042zM6.79 72.668l.213-1.195 7.343 1.409-.213 1.195-7.344-1.409zM15.157 69.125l-.341 1.152L7.6 68.228l.342-1.153 5.636-2.092c.427-.17 1.067-.17 1.494-.213v-.214c-.47 0-1.067.043-1.537-.085L9.009 63.19l.342-1.153 7.215 2.05-.341 1.152-5.636 2.135c-.427.17-1.068.17-1.537.214v.213c.47 0 1.067-.043 1.537.085l4.483 1.281.085-.042zM12.254 54.608l.513-1.068 2.775 1.367 1.793-3.715-2.775-1.366.512-1.068 6.704 3.288-.513 1.067-2.903-1.409-1.793 3.715 2.903 1.409-.512 1.067-6.704-3.287zM20.025 45.343c.341 0 .683.171.94.342l.127-.17c-.299-.172-.598-.385-.768-.684l-1.281-2.733.683-1.067 1.964 4.27 2.946 1.835-.64 1.025-2.947-1.836-4.781.214.683-1.068 3.074-.128zM27.795 42.739l-.64.811-5.978-4.74 1.794-2.262c1.28-1.622 3.458-1.921 5.208-.555s2.05 3.715.726 5.337l-1.153 1.409h.043zm.17-2.007c.94-1.195.641-2.903-.469-3.842-1.153-.897-2.732-.769-3.672.426l-.982 1.239 4.185 3.33.939-1.195v.042zM27.453 31.467l3.587-3.63.81.77-2.774 2.817 1.409 1.366 2.561-2.604.812.768-2.562 2.605 1.537 1.537 2.775-2.86.811.768-3.629 3.672-5.337-5.252v.043zM40.946 26.813c.341.256 1.622 1.067 1.622 1.067l-.94.769c-.768-.598-1.365-.982-1.494-1.068-.896-.64-1.409-.384-2.134.214-.214.17-.598.512-.812.64l1.879 2.306-.897.726-4.739-5.807 1.964-1.622c1.281-1.025 2.562-1.666 3.672-.3.64.77.47 1.452.128 2.135-.17.3-.512.555-.811.769l.128.17c.256-.213.555-.597.897-.64.47-.085.982.128 1.58.555l-.043.086zm-4.398.854l.982-.812c.768-.597 1.28-1.409.555-2.262-.683-.854-1.409-.427-2.22.213l-.982.811 1.665 2.007v.043zM41.842 19.256l1.196-.768 6.532 4.653-1.067.726-2.306-1.622-2.135 1.409.684 2.732-1.068.726-1.793-7.77-.043-.086zm1.623.897s-.3-.385-.427-.555l-.171.128s.342.384.342.64l.426 2.434 1.88-1.238-2.093-1.367.043-.042zM55.462 17.719c.811 1.58-.043 2.39-1.75 3.244-.257.129-.94.47-1.495.769l-1.067.512-3.416-6.66 2.476-1.281c1.367-.683 2.52-1.025 3.288.427.341.683.299 1.195-.256 1.836-.171.213-.513.299-.769.427l.086.17c.256-.128.512-.341.81-.384.77-.085 1.623 0 2.093.897v.043zm-4.099-.64c.854-.428 1.537-.897 1.11-1.709-.427-.81-1.067-.47-2.007 0l-1.195.64.896 1.709 1.196-.64zm1.708 3.159c1.067-.555 1.879-.94 1.323-2.007-.597-1.153-1.537-.64-2.69 0-.17.085-.554.256-.896.47h-.128l1.11 2.22 1.28-.64v-.043zM57.469 11.1l1.323-.512 5.38 5.978-1.195.47-1.88-2.093-2.39.897v2.775l-1.153.47V11.1h-.085zm1.409 1.239s-.214-.427-.3-.64l-.213.085s.214.47.214.683l-.086 2.476 2.093-.81-1.708-1.794zM66.947 15.755l-.982.256-1.921-7.386 2.818-.726c2.007-.512 3.928.555 4.483 2.69.555 2.134-.598 4.227-2.647 4.739l-1.793.427h.042zm1.367-1.537c1.494-.384 2.262-1.964 1.92-3.373-.34-1.41-1.707-2.263-3.201-1.879l-1.495.385 1.324 5.208 1.452-.384v.043zM87.484 11.912a2.177 2.177 0 100-4.355 2.177 2.177 0 000 4.355zM87.484 167.966a2.178 2.178 0 100-4.355 2.178 2.178 0 000 4.355zM107.166 13.322c-.384 1.75-1.537 1.793-3.416 1.409-.299-.043-1.024-.257-1.622-.385l-1.153-.256 1.58-7.3 2.732.597c1.495.341 2.605.854 2.263 2.39-.171.77-.555 1.11-1.366 1.239-.256 0-.598-.128-.854-.17v.213c.214.042.555.085.811.213.683.427 1.281.982 1.025 2.05zm-3.458.384c1.152.256 2.006.47 2.263-.683.256-1.239-.812-1.452-2.05-1.75-.171 0-.598-.129-.982-.214h-.128l-.512 2.348 1.409.299zm.683-3.544c.939.213 1.75.299 1.921-.598.171-.896-.512-1.067-1.537-1.28l-1.324-.3-.427 1.88 1.324.298h.043zM111.137 8.838l4.867 1.623-.341 1.067-3.758-1.238-.64 1.879 3.501 1.152-.342 1.068-3.501-1.153-.683 2.05 3.8 1.28-.341 1.068-4.91-1.623 2.391-7.13-.043-.043zM122.323 15.158c-.128-.64-.641-1.281-1.58-1.708-.726-.342-1.622-.342-1.836.17-.469 1.068 4.056 2.947 2.989 5.295-.598 1.323-2.22 1.409-3.928.683-1.324-.598-1.964-1.622-2.05-2.818h1.111c.042.854.64 1.452 1.537 1.836 1.024.47 1.793.342 2.049-.213.64-1.452-3.8-3.16-2.861-5.252.555-1.195 2.178-1.238 3.63-.555 1.28.555 1.921 1.58 2.049 2.519h-1.067l-.043.043zM124.586 22.8l3.202-5.465-1.793-1.068.555-.939 4.611 2.69-.555.94-1.793-1.068-3.202 5.465-1.025-.598v.043zM137.693 29.802c-.17.385-.725 1.794-.725 1.794l-.94-.769c.427-.896.726-1.537.769-1.665.427-1.025.085-1.452-.641-2.05-.213-.17-.597-.512-.811-.682l-1.879 2.305-.896-.726 4.739-5.806 1.964 1.622c1.281 1.025 2.135 2.178 1.025 3.544-.641.768-1.324.768-2.05.512-.341-.085-.64-.427-.896-.64l-.128.17c.256.214.683.427.811.769.171.47.085.982-.256 1.622h-.086zm-1.75-4.184l.982.812c.768.597 1.622.982 2.305.128.684-.854.171-1.495-.683-2.135l-.982-.811-1.665 2.006h.043zM143.97 27.923l3.629 3.63-.768.768-2.775-2.775-1.409 1.409 2.604 2.604-.769.769-2.604-2.605-1.537 1.537 2.818 2.818-.769.768-3.629-3.629 5.295-5.294h-.086zM151.143 38.554c.171-.64 0-1.451-.64-2.22-.513-.64-1.281-1.025-1.751-.683-.896.726 2.306 4.44.299 6.063-1.153.94-2.647.256-3.8-1.153-.939-1.153-1.025-2.306-.555-3.458l.982.47c-.342.768-.085 1.579.512 2.347.684.855 1.452 1.11 1.922.726 1.238-.982-2.007-4.525-.214-5.977 1.025-.811 2.519-.128 3.501 1.153.854 1.067.982 2.263.683 3.202l-.982-.47h.043zM149.733 46.41l5.337-3.458-1.11-1.75.94-.598 2.903 4.44-.939.598-1.11-1.75-5.337 3.458-.641-.982-.043.042zM160.237 49.4l.64 1.28-5.336 6.02-.598-1.152 1.878-2.135-1.195-2.306-2.775.385-.598-1.153 7.941-.94h.043zm-1.067 1.537s.427-.257.597-.385l-.085-.17s-.427.298-.64.298l-2.477.171 1.025 2.007 1.58-1.921zM160.877 63.275c-1.665.64-3.074-.341-3.714-2.006-.641-1.666-.214-3.33 1.451-3.971 2.05-.811 4.569-1.708 4.569-1.708l.427 1.11-4.313 1.623c-.939.341-1.494 1.451-1.067 2.519.384 1.067 1.537 1.537 2.476 1.195a803.587 803.587 0 014.313-1.622l.427 1.11-4.569 1.75zM162.243 71.217c-.384.214-1.665 1.025-1.665 1.025l-.299-1.195c.854-.47 1.495-.812 1.623-.897.939-.555.939-1.11.726-2.007a8.927 8.927 0 00-.257-1.024l-2.86.725-.299-1.152 7.258-1.836.598 2.433c.384 1.58.384 2.99-1.281 3.416-.982.256-1.494-.17-1.964-.811-.213-.256-.256-.726-.342-1.068h-.213c.085.385.299.812.171 1.153-.128.47-.513.811-1.153 1.196l-.043.042zm1.068-4.355l.299 1.239c.256.939.725 1.75 1.793 1.494 1.067-.256.982-1.11.726-2.135l-.299-1.238-2.519.64zM168.648 75.358l.171 1.409-7.002 3.885-.171-1.28 2.476-1.367-.341-2.562-2.733-.555-.171-1.28 7.771 1.75zm-1.494 1.067s.469-.128.683-.128v-.213c-.256 0-.512.128-.726.042l-2.391-.64.299 2.22 2.135-1.28zM161.988 83.684v-1.196l7.429-.17v1.195l-4.697 3.672c-.384.299-.939.47-1.366.64l.085.214c.427-.17 1.025-.384 1.495-.384l4.696-.129v1.196l-7.471.17v-1.195l4.696-3.714c.384-.3.939-.47 1.366-.64l-.085-.214c-.427.17-1.025.384-1.494.384l-4.654.128v.043zM161.902 92.992l6.319.512.171-2.049 1.11.085-.427 5.295-1.11-.086.17-2.049-6.319-.512.086-1.196zM167.879 103.921l-.256 1.196-7.301-1.537.256-1.196 7.301 1.537zM159.426 107.423l.342-1.153 7.173 2.178-.342 1.153-5.678 2.006c-.427.171-1.068.171-1.537.171v.213c.469 0 1.067.001 1.537.129l4.483 1.366-.342 1.153-7.173-2.178.342-1.153 5.678-2.006c.427-.171 1.068-.171 1.537-.171v-.214c-.469 0-1.067 0-1.537-.085l-4.483-1.366v-.043zM162.073 121.982l-.555 1.067-2.775-1.409-1.879 3.672 2.775 1.409-.555 1.067-6.66-3.415.555-1.068 2.903 1.495 1.879-3.672-2.904-1.494.556-1.068 6.66 3.416zM154.046 131.033c-.341 0-.683-.213-.939-.384l-.128.171c.299.171.598.427.726.726l1.238 2.732-.726 1.068-1.879-4.313-2.903-1.921.683-1.025 2.904 1.879 4.781-.128-.725 1.067h-3.074l.042.128zM146.232 133.51l.641-.769 5.892 4.91-1.879 2.221c-1.323 1.622-3.501 1.836-5.209.427-1.707-1.409-1.964-3.758-.597-5.38l1.195-1.409h-.043zm-.213 2.007c-.982 1.195-.726 2.903.384 3.842 1.11.94 2.69.812 3.715-.341l.982-1.196-4.142-3.458-.982 1.153h.043zM146.318 144.782l-3.672 3.544-.768-.811 2.818-2.733-1.366-1.409-2.648 2.562-.768-.811 2.647-2.562-1.494-1.58-2.861 2.775-.768-.811 3.714-3.586 5.209 5.379-.043.043zM132.741 149.137c-.341-.256-1.622-1.11-1.622-1.11l.982-.769a53.064 53.064 0 001.451 1.11c.897.641 1.367.427 2.135-.171.214-.17.641-.469.854-.64l-1.836-2.348.939-.726 4.612 5.892-2.007 1.58c-1.281 1.024-2.562 1.579-3.672.213-.598-.768-.427-1.452-.085-2.135.17-.299.555-.512.811-.725l-.128-.171c-.256.213-.598.555-.897.597-.47.043-.939-.128-1.537-.597zm4.44-.769l-1.024.811c-.769.598-1.281 1.367-.641 2.221.683.854 1.409.469 2.22-.171l1.025-.811-1.622-2.05h.042zM131.673 156.694l-1.196.768-6.447-4.824 1.068-.683 2.263 1.708 2.177-1.367-.598-2.732 1.11-.683 1.623 7.813zm-1.58-.939s.299.384.427.597l.171-.128s-.299-.384-.342-.64l-.384-2.434-1.921 1.196 2.049 1.409zM118.053 157.933c-.768-1.623.086-2.391 1.793-3.203.257-.128.94-.469 1.538-.725l1.067-.513 3.287 6.703-2.476 1.239c-1.366.683-2.562.939-3.245-.47-.341-.683-.256-1.196.299-1.793.171-.171.512-.299.769-.385l-.086-.17c-.256.128-.512.341-.811.341-.768.086-1.622 0-2.092-.939l-.043-.085zm2.434-2.477c-1.067.513-1.879.897-1.366 1.964.555 1.153 1.537.641 2.689.086.171-.086.556-.257.897-.427h.128l-1.067-2.221-1.281.641v-.043zm1.665 3.202c-.854.427-1.537.854-1.153 1.666.385.811 1.025.512 1.964.042l1.238-.598-.853-1.75-1.196.598v.042zM116.004 164.465l-1.366.47-5.252-6.063 1.196-.427 1.836 2.135 2.433-.854v-2.776l1.196-.427-.086 7.985.043-.043zm-1.366-1.238s.213.427.299.64l.213-.085s-.213-.47-.213-.683l.128-2.477-2.092.769 1.665 1.793v.043zM106.568 159.64l.982-.213 1.708 7.471-2.818.641c-2.049.469-3.928-.641-4.44-2.818-.512-2.178.726-4.184 2.733-4.654l1.793-.384.042-.043zm-1.366 1.452c-1.494.341-2.348 1.878-2.006 3.287.341 1.409 1.665 2.306 3.159 1.964l1.537-.341-1.195-5.252-1.452.342h-.043z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_35_988">
                          <path fill="#fff" d="M0 0H175.01V175.01H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
                <h1 className="font-trap text-[200px] text-center text-stroke-3 text-transparent font-[700] stroke-[#2F7158]">
                  Menu
                </h1>

                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-xu4mrg">
                  <div
                    className="flex items-center justify-center flex-col h-[409px] border-[1.5px] border-[#2F7158] rounded-[162px] cursor-pointer"
                    id="tiffins"
                  >
                    <div>
                      <p className="text-[24px] leading-[24px] font-semibold text-BackgoundGreen">
                        Tiffins
                      </p>
                    </div>
                    <div className="absolute bottom-28">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="16"
                        fill="none"
                        viewBox="0 0 46 16"
                      >
                        <path
                          stroke="#2F7158"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M1 8h43M37.5 1l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-xu4mrg">
                  <div
                    className="flex items-center justify-center flex-col h-[409px] border-[1.5px] border-[#2F7158] rounded-[162px] cursor-pointer"
                    id="lunch"
                  >
                    <div>
                      <p className="text-[24px] leading-[24px] font-semibold text-BackgoundGreen">
                        Lunch
                      </p>
                    </div>
                    <div className="absolute bottom-28">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="16"
                        fill="none"
                        viewBox="0 0 46 16"
                      >
                        <path
                          stroke="#2F7158"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M1 8h43M37.5 1l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-xu4mrg">
                  <div
                    className="flex items-center justify-center flex-col h-[409px] border-[1.5px] border-[#2F7158] rounded-[162px] cursor-pointer"
                    id="dinner"
                  >
                    <div>
                      <p className="text-[24px] leading-[24px] font-semibold text-BackgoundGreen">
                        Dinner
                      </p>
                    </div>
                    <div className="absolute bottom-28">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="16"
                        fill="none"
                        viewBox="0 0 46 16"
                      >
                        <path
                          stroke="#2F7158"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M1 8h43M37.5 1l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="relative">
            <div className="sticky top-0">
              <video
                id="img"
                muted=""
                playsinline=""
                loop=""
                style={{ objectFit: "cover" }}
              >
                <source src="media/FranchiseHorizantal.webm" type="video/mp4" />
              </video>
              <svg id="svg">
                <defs>
                  <mask id="mask">
                    <rect
                      id="rectangle"
                      width="100%"
                      height="100%"
                      fill="white"
                      style={{ maxWidth: "100vw" }}
                    ></rect>
                    <rect
                      id="square"
                      width="700"
                      height="400"
                      x="25%"
                      y="23%"
                      rx="215"
                      ry="215"
                      fill="black"
                      transform="translate(-50%, -50%)"
                      style={{ maxWidth: "100vw" }}
                    ></rect>
                  </mask>
                </defs>
                <rect
                  id="whiteLayer"
                  opacity="0"
                  width="100%"
                  height="100%"
                  fill="white"
                  style={{ maxWidth: "100vw" }}
                ></rect>
                <rect
                  width="100%"
                  height="100%"
                  fill="#F7F5F2"
                  mask="url(#mask)"
                ></rect>
              </svg>
            </div>
            <div id="content"></div>
          </div>
        </main>
      </div>

      <div className="bg-[#F7F5F2] py-2 relative pt-[50px]">
        <div>
          <div className="MuiContainer-root MuiContainer-maxWidthLg py-10 css-1qsxih2">
            <div className="flex flex-col items-center justify-around pt-6 border rounded-lg franchisecard md:pt-0 border-BackgoundGreen md:flex-row">
              <div className="relative pt-20 text-center md:left-7">
                <video
                  className="w-4/6"
                  muted=""
                  playsinline=""
                  autoplay=""
                  loop=""
                >
                  <source src="media/Catering.webm" type="video/mp4" />
                </video>
              </div>
              <div className="md:w-1/2 flex flex-col pt-[20px] md:pt-[0px] justify-center items-center relative md:right-4 none">
                <h2 className="font-trap font-bold text-[32px] md:text-5xl text-BackgoundGreen text-center">
                  Catering
                </h2>
                <p className="w-11/12 pt-5 text-base font-medium text-center font-trap md:text-lg text-BackgoundGreen md:w-9/12">
                  Add a South Indian touch to any event
                </p>
                <a href="/catering">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary fill border-BackgoundGreen mt-2.5 border-solid px-5 pt-3 pb-[11px] max-w-max franchisecardb relative top-3 md:left-0 cateringbtn css-79xub"
                    tabindex="0"
                    type="button"
                  >
                    <span className="text-lg font-semibold normal-case font-trap">
                      Find out more
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="pt-20 pb-12 md:pb-6 bg-[#F7F5F2]">
          <div className="text-center">
            <h4 className="font-trap font-[700] w-8/12 md:w-89 text-[32px] md:text-[48px] leading-[52px] text-[#2C6F56]">
              What People are Saying
            </h4>
            <p className="font-trap text-center w-[18rem] md:w-[26rem] font-[400] text-justify text-[#2C6F56] text-base md:text-lg leading-[26px] pt-3 md:pt-6">
              Read the candid confessions of many a�&nbsp;happy�&nbsp;customer
            </p>
          </div>
          <div className="absolute right-[200px] rotate-[30deg]">
            <img
              className="floating relative bottom-[178px]"
              src="images/garnish1.svg"
              alt="Leaf2"
            />
          </div>
          <div className="pt-14 pb-2 md:pb-20 w-full overflow-visible hide-scrollbar pl-2 cs">
            <div className="slick-slider slick-initialized" dir="ltr">
              <div
                className="slick-arrow slick-prev slick-disabled"
                style={{ display: "block", left: "0" }}
              ></div>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{ width: "225%", left: "0%" }}
                >
                  <div
                    data-index="0"
                    className="slick-slide slick-active slick-current"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video1.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video2.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video3.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video4.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video5.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video6.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="6"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video7.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="7"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video8.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="8"
                    className="slick-slide"
                    tabindex="-1"
                    aria-hidden="true"
                    style={{ outline: "none", width: "11.11111111111111%" }}
                  >
                    <div>
                      <div
                        className="px-0 carouselout cursor-pointer"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <video
                          muted=""
                          autoplay=""
                          loop=""
                          id="landingVideo"
                          playsinline=""
                          className="newhomevideocontrol"
                          preload="none"
                        >
                          <source src="media/Video9.webm" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-arrow slick-next"
                style={{ display: "block" }}
              ></div>
              <ul style={{ display: "block" }} className="slick-dots">
                <li className="slick-active">
                  <button>1</button>
                </li>
                <li className="">
                  <button>2</button>
                </li>
                <li className="">
                  <button>3</button>
                </li>
                <li className="">
                  <button>4</button>
                </li>
                <li className="">
                  <button>5</button>
                </li>
                <li className="">
                  <button>6</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-12">
          <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
            <div className="text-center">
              <h4 className="font-trap font-[700] text-[32px] leading-8 text-[#2C6F56]">
                Follow us
              </h4>
              <div className="flex justify-center pt-6">
                <a
                  href="https://www.instagram.com/bisibisi_eats/"
                  target="blank"
                >
                  <div className="flex justify-center items-center">
                    <span className="font-trap font-[400] pl-1 text-[32px] leading-10">
                      bisibisi_eats
                    </span>
                  </div>
                </a>
                <a href="https://www.youtube.com/@bisibisieats" target="blank">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="49"
                      fill="none"
                      viewBox="0 0 49 49"
                    >
                      <rect
                        width="49"
                        height="49"
                        fill="#2C6F56"
                        rx="24.5"
                      ></rect>
                      <g
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        clip-path="url(#clip0_1567_11066)"
                      >
                        <path d="M37.675 17.525a3.475 3.475 0 00-2.425-2.5C33.1 14.5 24.5 14.5 24.5 14.5s-8.6 0-10.75.575a3.475 3.475 0 00-2.425 2.5 36.262 36.262 0 00-.575 6.613 36.256 36.256 0 00.575 6.662 3.475 3.475 0 002.425 2.4c2.15.575 10.75.575 10.75.575s8.6 0 10.75-.575a3.475 3.475 0 002.425-2.5c.39-2.166.583-4.362.575-6.563a36.239 36.239 0 00-.575-6.662z"></path>
                        <path d="M21.688 28.275l7.187-4.087-7.188-4.088v8.175z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1567_11066">
                          <path
                            fill="#fff"
                            d="M0 0H30V30H0z"
                            transform="translate(9.5 9.5)"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    �&nbsp;
                    <span className="font-trap font-[400] pl-1 text-[32px] leading-10">
                      @bisibisieats
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="relative z-[99] md:z-[9] bg-BackgoundGreen p-4 text-white text-center">
        <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
          <div>
            <p className="footerheading text-footertextcolor pt-9">Locations</p>
            <div className="md:grid grid-flow-col grid-cols-3 gap-4 p-3 md:mt-9">
              <div className="pb-7 md:pb-0">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="53"
                    fill="none"
                    viewBox="0 0 53 53"
                  >
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M38.814 23.824c0 9.369-12.046 17.399-12.046 17.399s-12.045-8.03-12.045-17.4a12.045 12.045 0 1124.09 0z"
                    ></path>
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M26.768 27.839a4.015 4.015 0 100-8.03 4.015 4.015 0 000 8.03z"
                    ></path>
                  </svg>
                </div>
                <h2 className="footerLoactionheading mt-2.5 footertextcolor text-[20px] md:text-2xl">
                  HITEC CITY
                </h2>
                <p className="mt-2 md:mt-4 mb-3 md:mb-5 footertextcolor footeraddresstext text-sm md:text-base">
                  Upper Ground Floor, Phoenix tower A, Hitech City Main Rd,
                  opposite Trident hotel, HITEC City, Hyderabad, Telangana
                  500081
                </p>
                <a href="https://wa.me/9032984111?text=Hi,%20Bisi%20Bisi">
                  <div className="text-[18px] pb-3 md:mb-4 font-trap font-[500] footertextcolor leading-[26px]">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="WhatsAppIcon"
                    >
                      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                    </svg>
                    �&nbsp; +91 90329 84111
                  </div>
                </a>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary filldirection footerbutton border-footertextcolor text-sm footeraddresstext css-1hw9j7s"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium rotate-[17deg] text-[20px] css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="NearMeIcon"
                  >
                    <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z"></path>
                  </svg>
                  �&nbsp; Get Directions
                </button>
              </div>
              <div className="pb-7 md:pb-0">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="53"
                    fill="none"
                    viewBox="0 0 53 53"
                  >
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M38.814 23.824c0 9.369-12.046 17.399-12.046 17.399s-12.045-8.03-12.045-17.4a12.045 12.045 0 1124.09 0z"
                    ></path>
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M26.768 27.839a4.015 4.015 0 100-8.03 4.015 4.015 0 000 8.03z"
                    ></path>
                  </svg>
                </div>
                <h2 className="footerLoactionheading mt-2.5 footertextcolor text-[20px] md:text-2xl">
                  JUBILEE HILLS
                </h2>
                <p className="mt-2 md:mt-4 mb-3 md:mb-5 footertextcolor footeraddresstext text-sm md:text-base">
                  4th &amp; 5th Floor, MR Plaza, Rd Number
                  <br />
                  36, Jubilee Hills, Hyderabad, Telangana <br />
                  500033
                </p>
                <a href="https://wa.me/9032984111?text=Hi,%20Bisi%20Bisi">
                  <div className="text-[18px] pb-3 md:mb-4 font-trap font-[500] footertextcolor leading-[26px]">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="WhatsAppIcon"
                    >
                      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                    </svg>
                    �&nbsp; +91 90329 84111
                  </div>
                </a>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary filldirection footerbutton border-footertextcolor text-sm footeraddresstext css-1hw9j7s"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium rotate-[17deg] text-[20px] css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="NearMeIcon"
                  >
                    <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z"></path>
                  </svg>
                  �&nbsp; Get Directions
                </button>
              </div>
              <div className="pb-7 md:pb-0">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="53"
                    fill="none"
                    viewBox="0 0 53 53"
                  >
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M38.814 23.824c0 9.369-12.046 17.399-12.046 17.399s-12.045-8.03-12.045-17.4a12.045 12.045 0 1124.09 0z"
                    ></path>
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M26.768 27.839a4.015 4.015 0 100-8.03 4.015 4.015 0 000 8.03z"
                    ></path>
                  </svg>
                </div>
                <h2 className="footerLoactionheading mt-2.5 footertextcolor text-[20px] md:text-2xl">
                  FINANCIAL DISTRICT
                </h2>
                <p className="mt-2 md:mt-4 mb-3 md:mb-5 footertextcolor footeraddresstext text-sm md:text-base">
                  Ground floor, Mahaveer manc, Gowlidoddy, Wipro circle road,
                  Hyderabad, Telangana 500032
                </p>
                <a href="https://wa.me/9032984111?text=Hi,%20Bisi%20Bisi">
                  <div className="text-[18px] pb-3 md:mb-4 font-trap font-[500] footertextcolor leading-[26px]">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="WhatsAppIcon"
                    >
                      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                    </svg>
                    �&nbsp; +91 90329 84111
                  </div>
                </a>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary filldirection footerbutton border-footertextcolor text-sm footeraddresstext css-1hw9j7s"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium rotate-[17deg] text-[20px] css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="NearMeIcon"
                  >
                    <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z"></path>
                  </svg>
                  �&nbsp; Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-20 mb-12">
          <img
            src="images/Footerlinedesign.svg"
            alt="rfv"
            height="1px"
            width="100%"
          />
        </div>

        <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
          <div>
            <ul className="flex items-center justify-center gap-9">
              <li className="text-white font-medium text-base">
                <a href="/about">Our Story</a>
              </li>
              <li className="text-white font-medium text-base">
                <a href="/menu">Our Menu</a>
              </li>
              <li className="text-white font-medium text-base">
                <a href="/catering">Catering</a>
              </li>
              <li className="text-white font-medium text-base">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-12 mb-7 md:mb-9">
          <img
            src="images/Footerline.png"
            alt="efgq"
            height="1px"
            width="100%"
          />
        </div>

        <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
          <div>
            <p className="text-sm font-light footertextcolor text-white mb-0 pb-3 md:mb-5">
              © 2024. All Rights Reserved. Design by
              <a href="https://axlrdata.com/">Axlrdata</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;
