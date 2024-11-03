import foto from "../foto1.jpeg";

function Profile() {
    return <img src={foto.src} alt="Fikry Hafizh" className="fotoku" />;
  }

  export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-400 text-2xl font-bold">CV ONLINE</h1>
          <h2 className="text-4xl font-bold mb-4">Fikry Hafizh</h2>
          <Profile />
          <p>Saya adalah mahasiswa semester 5 prodi D3 Komputerisasi Akuntansi Universitas Ma'soem! Cita-cita ingin menjadi pribadi yang berguna bagi nusa-bangsa,sukses dan selamat didunia-diakhirat.</p>
        </div>
    );
}