import Image from '@/components/image'

export default function Hero() {
    return (
        <section className="min-w-screen grid items-center justify-between py-8 lg:grid-cols-2 lg:grid-rows-1">
            <div className="mb-10 flex h-full w-full flex-col items-start justify-center pr-8 xl:mb-0">
                <div className="flex w-full grid-cols-2 flex-col items-center justify-center md:flex-row lg:justify-start">
                    <div>
                        <Image
                            src="/static/images/avatar.jpg"
                            width="72"
                            height="72"
                            className="h-32 w-32 rounded-lg border-2 border-gray-200 shadow-md"
                            layout="fixed"
                            alt=""
                        />
                    </div>
                    <div className="ml-6">
                        <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
                            Thaza_Kun
                        </h2>
                        <div className="font-display mt-1 text-center">(Murthadza Aznam)</div>
                    </div>
                </div>
                <p className="mt-2 w-full text-center text-lg lg:text-left">
                    Graduan Fizik yang sedang meneroka dunia digital.
                </p>
                <p className="mt-8 text-center text-sm text-gray-400 dark:text-gray-400 lg:text-left">
                    Bagi yang meminati Sains, Matematik, Data, atau Pengaturcaraan; bolehlah ikut
                    kembara bersamaku.
                </p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/Thaza_Kun"
                    className="w-full"
                >
                    <a
                        className="my-3 flex flex-row items-center justify-center text-sm font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 lg:justify-start"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <svg
                            fill="currentColor"
                            stroke="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            className="mr-1 h-4 w-4"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                        Bagi yang ada Twitter, aku di sana juga
                    </a>
                </a>
            </div>
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
                <div className="my-2 grid items-start gap-8">
                    <div className="group relative">
                        <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                        <a target="_blank" href="https://discord.gg/9c6cWVwdEJ">
                            <a className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                                <span className="flex items-center space-x-5">
                                    <svg
                                        fill="currentColor"
                                        stroke="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke-width="2"
                                        className="mr-1 h-4 w-4"
                                    >
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                                        Bincang bersama pembaca yang lain
                                    </span>
                                </span>
                                <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                                    Discord →
                                </span>
                            </a>
                        </a>
                    </div>
                </div>
                <div class="my-2 grid items-start gap-8">
                    <div class="group relative">
                        <div class="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                        <a target="_blank" href="https://github.com/thaza-kun/">
                            <a class="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                                <span class="flex items-center space-x-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 -rotate-6 text-fuchsia-600"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        stroke="while"
                                    >
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                    <span class="pr-6 text-gray-900 dark:text-gray-100">
                                        Jenguk kod yang pernah kuhasilkan
                                    </span>
                                </span>
                                <span class="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                                    Github →
                                </span>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="my-2 grid items-start gap-8">
                    <div className="group relative">
                        <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                        <a target="_blank" href="https://ko-fi.com/thaza_kun">
                            <a className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                                <span className="flex items-center space-x-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-cup"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
                                    </svg>
                                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                                        Sumbangkan secangkir kopi
                                    </span>
                                </span>
                                <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                                    Kofi →
                                </span>
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
