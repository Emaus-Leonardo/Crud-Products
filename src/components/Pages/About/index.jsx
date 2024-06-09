import React from 'react'

function AboutPage() {
    return (
        <div>
            <section className='h-screen flex justify-center items-center text-black bg-[#F4F6F8]'>

                <div className='container max-w-[700px] mx-auto flex flex-col justify-center items-center gap-10 z-10 mb-32'>
                    <div>
                        <h1 className='text-[32px] font-bold'>Sobre Nós</h1>
                    </div>
                    <div className='md:w-[800px] w-[450px] h-[300px] bg-slate-200 rounded-lg'></div>
                    
                    <p className='px-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex quod, quos voluptatibus delectus inventore? Voluptates, laborum laudantium rem, a ipsam alias nostrum minus omnis temporibus, nemo fugiat deserunt quis!</p>
                </div>

                <div className='absolute bg-[#FFFFFF] w-full h-[400px] top-0'></div>
            </section>
        </div>
    )
}

export default AboutPage
