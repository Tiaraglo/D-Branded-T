
export default function AboutUs() {
    return (
        <>
            <div
                className="bg-no-repeat bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url(https://st.depositphotos.com/1433253/3248/i/450/depositphotos_32486391-stock-photo-abstract-biz-background.jpg)"
                }}
            >
                <div className="absolute bg-gradient-to-b from-green-500 to-blue-400 opacity-75 inset-0 z-0" />
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">
                            <img src="" className="mb-3" />
                            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome To D'Branded'T's  </h1>
                            <p className="pr-3">
                                D'Branded'T is a lifestyle wear that provides various categories from well-known brands...
                                It was discovered in 1990 with the pure desire of its predecessors regarding an art form that could be applied in everyday life!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}