
function Reccomend () {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1598927847550-929c52974be3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?q=80&w=3572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1601351841251-766245326eee?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1686397139775-4391d3e2e6b6?q=80&w=3596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

return (
    <>
    <h1 className="text-3xl max-w-[1400px] m-auto">Our Reccomend</h1>
    <div className="max-w-[1400px] h-[600px] w-full m-auto py-14 px-4 flex flex-row gap-5">
    {slides.map((slide, slideIndex) => (
    <div className="w-[350px] h-[450px] flex flex-col justify-around items-center">
    <div style={{backgroundImage: `url(${slides[slideIndex].url})`}} className="w-full h-4/5 rounded-2xl bg-center bg-cover"></div>
    <h1 className="text-2xl">Restuarant Name</h1>
    </div>
    ))}
    </div>
    </>
)

}

export default Reccomend