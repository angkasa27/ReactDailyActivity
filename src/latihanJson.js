import React, { Component } from "react";
import "./App.js";

class latihanJson extends Component {
    constructor(){
        super();
        this.state = {
            siswa: [
                {
                    id: 1,
                    name: "Saya adalah siswa 1"
                },
                {
                    id: 2,
                    name: "Saya adalah siswa 2"
                },
                {
                    id: 3,
                    name: "Saya adalah siswa 3"
                }
            ],
            employee: []
        };
    }

    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => response.json())
        .then(data => {
            this.setState({employee: data});
        });
    }

    render() {
        return (
            <div>
                <div className="color">
                    <h2>Ini adalah data JSON</h2>
                    {this.state.siswa.map((namaArray, key) => (
                        <div>
                            <h3>
                            id: {namaArray.id}. nama: {namaArray.name}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="color">
                    {this.state.siswa.map((dinamis, key) => (
                        <div>
                            <h3>
                                nama: {dinamis.employee_name}. Gaji: {dinamis.employee_salary}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}