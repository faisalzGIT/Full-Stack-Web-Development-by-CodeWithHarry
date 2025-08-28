"use client";

export default function Home() {
    async function onclick(){
        let data = { harry: "vhai coding wale" };
        let a = await fetch('api/add',{method:"POST", headers:{"content-type":"application/json"}, body: JSON.stringify(data),})
        let res = await a.json()
        console.log(res, "qwiaweu")
    }
  return (
    <div>
      <h1 className="text-2xl font-bold">About Us</h1>
      <p>This is the about page of our application.</p>
      <button className="bg-amber-900" onClick={onclick}>CLICK ME</button>
    </div>
  );
}
