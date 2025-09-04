
export default function Page({ params }) {
    let languages = ['javaScript', 'python', 'c', 'java', 'go','ruby']
    
    if(languages.includes(params.slug)){
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">
                <div className="bg-neutral-900 px-12 py-8 rounded-xl shadow-lg text-3xl tracking-wide">
                    <h1>{params.slug}</h1>
                </div>
            </div>
        );
    } else {
        return <>
            <h1>Page does not exist!!!!!!</h1>
        </>
    }

   
}
