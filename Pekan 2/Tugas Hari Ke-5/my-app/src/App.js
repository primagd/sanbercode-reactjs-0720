import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <h1 style={{"text-align":"center"}}> Form Pembelian Buah</h1>
            <div>
                <div style={{display: "inline-block", width: "150px", "font-weight": "bold", "font-size": "16px"}}>
                    Nama Pelanggan
                </div>

                <input style={{"display": "inline-block", "type":"text", "name":"name"}}></input> <br></br> <br></br>

                <div style={{display: "block", "margin-bottom": "1em"}}>
                    <div style={{display: "inline-block", width: "150px", "font-weight": "bold", "font-size": "16px"}}>
                        Daftar Item
                </div>
                        <div style={{"display": "inline-block"}}>
                        <input type="checkbox"></input>
                        <label for="fruit1">Semangka</label> <br></br>
                        <input type="checkbox"></input>
                        <label for="fruit2">Jeruk</label> <br></br>
                        <input type="checkbox"></input>
                        <label for="fruit3">Nanas</label> <br></br>
                        <input type="checkbox"></input>
                        <label for="fruit4">Salak</label> <br></br>
                        <input type="checkbox"></input>
                        <label for="fruit5">Anggur</label> <br></br> <br></br>
                </div>
                </div>
                <button>
                    <a href="index.html" style={{"text-decoration": "none", "color": "black"}}>Kirim</a>
                </button>          
            </div>
        </div>

    );
}

export default App;