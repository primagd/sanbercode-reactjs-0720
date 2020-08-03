import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
<div className="App">
    <h1 style={{"text-align":"center"}}> Form Pembelian Buah</h1>
    <div>
        <div style={{"display": "inline-block", "width": "150px", "font-weight": "bold", "font-size": "16px"}}>
            Nama Pelanggan
        </div>
        <input style={{"display": "inline-block", "type":"text", "name":"name"}}> <br><br>


        <div style={{display: block, "margin-bottom": "1em"}}>
            <div style={{display: inline-block, width: "150px", "font-weight": bold, "font-size": "16px"}}>
                Daftar Item
            </div>
            <div style={{"display": "inline-block"}>
                <input type="checkbox" id="fruit1" name="fruit1" value="semangka">
                <label for="fruit1">Semangka</label><br>
                <input type="checkbox" id="fruit2" name="fruit2" value="jeruk">
                <label for="fruit2">Jeruk</label><br>
                <input type="checkbox" id="fruit3" name="fruit3" value="nanas">
                <label for="fruit3">Nanas</label><br>
                <input type="checkbox" id="fruit4" name="fruit4" value="salak">
                <label for="fruit4">Salak</label><br>
                <input type="checkbox" id="fruit5" name="fruit5" value="anggur">
                <label for="fruit5">Anggur</label><br>
            </div>
        </div>
        <button>
            <a href="index.html" style={{"text-decoration": "none"}}>Kirim</a>
          </button>

    </div>
</div>
    );
}

export default App;