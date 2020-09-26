import React, { Component } from 'react';

class App extends Component {

  state = {
    receiveCheckbox1: false,
    receiveCheckbox2: false,

    donateCheckbox1: false,
    donateCheckbox2: false,
    donateCheckbox3: false,
    donateCheckbox4: false,

    // donor : {
    //   name: "",
    //   bloodGroup: "",
    //   gender: "",
    //   age: "",
    //   DOB: "",
    //   phone: "",
    //   alternatePhone: "",
    //   email: "",
    //   locality: ""
    // },

    donorName: "",
    donorBloodGroup: "",
    donorGender: "",
    donorAge: "",
    donorDOB: "",
    donorPhone: "",
    donorAlternatePhone: "",
    donorEmail: "",
    donorLocality: "",

    receiverName: "",
    receiverBloodGroup: "",
    receiverGender: "",
    receiverAge: "",
    receiverHospitalName: "",
    receiverHospitalIPNumber: "",
    receiverPrescriptionFile: "",
    receiverPhone: "",
    receiverAlternatePhone: "",
    receiverEmail: "",
    receiverLocality: ""
  }

  resetData() {
    this.setState({
      receiveCheckbox1: false,
      receiveCheckbox2: false,
      donateCheckbox1: false,
      donateCheckbox2: false,
      donateCheckbox3: false,
      donateCheckbox4: false,
      donorName: "",
      donorBloodGroup: "",
      donorGender: "",
      donorAge: "",
      donorDOB: "",
      donorPhone: "",
      donorAlternatePhone: "",
      donorEmail: "",
      donorLocality: "",
      receiverName: "",
      receiverBloodGroup: "",
      receiverGender: "",
      receiverAge: "",
      receiverHospitalName: "",
      receiverHospitalIPNumber: "",
      receiverPrescriptionFile: "",
      receiverPhone: "",
      receiverAlternatePhone: "",
      receiverEmail: "",
      receiverLocality: ""
    })
  }

  donorSubmit() {
    const { 
      donorName, 
      donorBloodGroup, 
      donorGender, 
      donorAge, 
      donorDOB, 
      donorPhone, 
      donorAlternatePhone, 
      donorEmail, 
      donorLocality 
    } = this.state
    let data = {
      name: donorName,
      bloodGroup: donorBloodGroup,
      gender: donorGender,
      age: donorAge,
      DOB: donorDOB,
      phone: donorPhone,
      alternatePhone: donorAlternatePhone,
      email: donorEmail,
      locality: donorLocality
    }
    console.log(data)
    // let btn = document.querySelector('#donorSubmitButton')
    // btn.setAttribute("disabled", true)
    window.alert('Donor request submitted.')
    this.resetData()
  }

  receiverSubmit() {
    const { 
      receiverName,
      receiverBloodGroup,
      receiverGender, 
      receiverAge,
      receiverHospitalName, 
      receiverHospitalIPNumber, 
      receiverPrescriptionFile, 
      receiverPhone,
      receiverAlternatePhone,
      receiverEmail,
      receiverLocality
    } = this.state
    let data = {
      name: receiverName,
      bloodGroup: receiverBloodGroup,
      gender: receiverGender,
      age: receiverAge,
      hospitalName: receiverHospitalName,
      hospitalIPNumber: receiverHospitalIPNumber,
      prescription: receiverPrescriptionFile,
      phone: receiverPhone,
      alternatePhone: receiverAlternatePhone,
      email: receiverEmail,
      locality: receiverLocality
    }
    console.log(data)
    // let btn = document.querySelector('#receiverSubmitButton')
    // btn.setAttribute("disabled", true)
    window.alert('Receiver request submitted.')
    this.resetData()
  }

  receiverPrescriptionFileUpload(file){
    this.setState({
      receiverPrescriptionFile: file
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center m-4">
          <div className="col-xs-12 mx-auto">
            <h1 className="text-center m-2">जिल्हा आधिकारी कार्यालय, सातारा</h1>
            <h3 className="text-center m-4">प्लाज्मा दान करें - जान बचाएं</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto p-5">
            {/* <iframe width="500" height="280" frameBorder="0"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe> */}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto p-5">
            <div className="row justify-content-center">
              <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6 mx-auto">
                <p className="text-center">An initiative by</p>
                <div className="text-center">
                  <img src="./punelogo.png" className="img-responsive" alt="" />
                </div>
              </div>
              {/* <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6">
                <p className="text-center">Supported by</p>
                <img src="https://puneplasma.in/images/scsc-logo.png" alt="" />
              </div> */}
            </div>
            <div className="row justify-content-center m-5">
              <div className="col-12 mx-auto my-2">
                <button className="btn btn-lg btn-primary w-100" data-toggle="modal" data-target="#donateModal" onClick={()=>this.resetData()}>DONATE PLASMA</button>
              </div>
              <div className="col-12 mx-auto my-2">
                <button className="btn btn-lg btn-light w-100" data-toggle="modal" data-target="#receiveDeclareModal" onClick={()=>this.resetData()}>RECEIVE PLASMA</button>
              </div>
            </div>
          </div>
        </div>





        <div className="modal fade mt-5" id="donateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Who can Donate Plasma!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-3">
                <p>
                  If you have fully recovered from COVID-19, you may be able to help patients currently fighting the infection by donating your plasma. Because you fought the infection, your plasma now contains COVID-19 antibodies. These antibodies provided one way for your immune system to fight the virus when you were sick, so your plasma may be able to be used to help others fight off the disease.
                </p>
                <p>I feel proud & responsible to contribute back to human survival with Plasma donation and help COVID-19 patients</p>
              </div>
              <button type="button" className="btn btn-primary w-auto m-4" data-toggle="modal" data-target="#donateDeclareModal" data-dismiss="modal">DONATE</button>
            </div>
          </div>
        </div>




        <div className="modal fade mt-5" id="receiveDeclareModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Declaration</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* <div className="m-2">
                  <input type="checkbox" />&nbsp;<span>I voluntarily agree to receive plasma from COVID-19 recovered patients.</span>
                </div>
                <div className="m-2">
                  <input type="checkbox" />&nbsp;<span>I do not hold Plasma donor for any side affects that may be suffered by me later.</span>
                </div> */}
                <div className="checkbox"><label><input type="checkbox" checked={this.state.receiveCheckbox1} onChange={(e) => this.setState({ receiveCheckbox1: e.target.checked })} />&nbsp; I voluntarily agree to receive plasma from COVID-19 recovered patients.</label></div>
                <div className="checkbox"><label><input type="checkbox" checked={this.state.receiveCheckbox2} onChange={(e) => this.setState({ receiveCheckbox2: e.target.checked })} />&nbsp; I do not hold Plasma donor for any side affects that may be suffered by me later.</label></div>
              </div>
              <button type="button" disabled={!(this.state.receiveCheckbox1 && this.state.receiveCheckbox2)} className="btn btn-primary w-auto m-4" data-dismiss="modal" data-toggle="modal" data-target="#receiveFormModal">PROCEED TO REGISTER AS RECIPIENT</button>
            </div>
          </div>
        </div>






        <div className="modal fade mt-5" id="donateDeclareModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Declaration</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="checkbox"><label><input type="checkbox" checked={this.state.donateCheckbox1} onChange={(e) => this.setState({ donateCheckbox1: e.target.checked })} />&nbsp; I here by declare that I am willing to donate Plasma to save Covid patients.</label></div>
                <div className="checkbox"><label><input type="checkbox" checked={this.state.donateCheckbox2} onChange={(e) => this.setState({ donateCheckbox2: e.target.checked })} />&nbsp; I have fully recovered and is now free of symptoms for 14 days.</label></div>
                <div className="checkbox"><label><input type="checkbox" checked={this.state.donateCheckbox3} onChange={(e) => this.setState({ donateCheckbox3: e.target.checked })} />&nbsp; I am not a cancer survivor or has Chronic Kidney, heart, lung or liver diseases.</label></div>
                <div className="checkbox"><label><input type="checkbox" checked={this.state.donateCheckbox4} onChange={(e) => this.setState({ donateCheckbox4: e.target.checked })} />&nbsp; Recipients may contact me.</label></div>

              </div>
              <button type="button" disabled={!(this.state.donateCheckbox1 && this.state.donateCheckbox2 && this.state.donateCheckbox3 && this.state.donateCheckbox4)} className="btn btn-primary w-auto m-4" data-dismiss="modal" data-toggle="modal" data-target="#donateFormModal">PROCEED TO REGISTER AS DONOR</button>
            </div>
          </div>
        </div>




        <div className="modal fade mt-5" id="donateFormModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Register as Donor</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form">
                  <input type="text" value={this.state.donorName} onChange={(e) => this.setState({ donorName: e.target.value })} className="form-control my-3" placeholder="Full Name" />
                  <div className="form-row my-3">
                    <div className="col-6">
                      <select className="form-control" value={this.state.donorBloodGroup} onChange={(e) => this.setState({ donorBloodGroup: e.target.value })}>
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select className="form-control" value={this.state.donorGender} onChange={(e) => this.setState({ donorGender: e.target.value })}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row my-3">
                    <div className="col-6">
                      <input type="number" className="form-control" value={this.state.donorAge} onChange={(e) => this.setState({ donorAge: e.target.value })} placeholder="Age" />
                    </div>
                    <div className="col-6">
                      <input type="date" className="form-control" value={this.state.donorDOB} onChange={(e) => this.setState({ donorDOB: e.target.value })} placeholder="Date of Birth" />
                    </div>
                  </div>
                  <div className="form-row my-3">
                    <div className="col-6">
                      <input type="number" minLength="10" maxLength="10" className="form-control" value={this.state.donorPhone} onChange={(e) => this.setState({ donorPhone: e.target.value })} placeholder="Phone Number" />
                    </div>
                    <div className="col-6">
                      <input type="number" minLength="10" maxLength="10" className="form-control" value={this.state.donorAlternatePhone} onChange={(e) => this.setState({ donorAlternatePhone: e.target.value })} placeholder="Alternate Number" />
                    </div>
                  </div>
                  <input type="email" className="form-control my-3" placeholder="Email" value={this.state.donorEmail} onChange={(e) => this.setState({ donorEmail: e.target.value })} />
                  <input type="text" className="form-control my-3" placeholder="Your locality" value={this.state.donorLocality} onChange={(e) => this.setState({ donorLocality: e.target.value })} />
                </div>

              </div>
              <button type="button"
                disabled={!(this.state.donorName !== ""
                  && this.state.donorBloodGroup !== ""
                  && this.state.donorGender !== ""
                  && this.state.donorAge !== ""
                  && this.state.donorDOB !== ""
                  && this.state.donorPhone !== ""
                  && this.state.donorAlternatePhone !== ""
                  && this.state.donorEmail !== ""
                  && this.state.donorLocality !== "")}
                id="donorSubmitButton" className="btn btn-primary w-auto m-3" data-dismiss="modal" onClick={() => this.donorSubmit()}>SUBMIT</button>
            </div>
          </div>
        </div>





        <div className="modal fade mt-5" id="receiveFormModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Register as Receiver</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form">
                  <input type="text" className="form-control my-3" value={this.state.receiverName} onChange={(e)=>this.setState({receiverName: e.target.value})} placeholder="Full Name" />
                  <div className="form-row my-3">
                    <div className="col-6">
                      <select className="form-control" value={this.state.receiverBloodGroup} onChange={(e)=>this.setState({receiverBloodGroup: e.target.value})}>
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select className="form-control" value={this.state.receiverGender} onChange={(e)=>this.setState({receiverGender: e.target.value})}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row my-3">
                    <div className="col-6">
                      <input type="number" className="form-control" placeholder="Age" value={this.state.receiverAge} onChange={(e)=>this.setState({receiverAge: e.target.value})} />
                    </div>
                    <div className="col-6">
                      <input type="text" className="form-control" placeholder="Hospital Name" value={this.state.receiverHospitalName} onChange={(e)=>this.setState({receiverHospitalName: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-row my-3">
                    <div className="col-6">
                      <input type="text" className="form-control" placeholder="Hospital IP Number"  value={this.state.receiverHospitalIPNumber} onChange={(e)=>this.setState({receiverHospitalIPNumber: e.target.value})}/>
                    </div>
                    <div className="col-6">
                      <input type="file" className="form-control" placeholder="Prescription" onChange={(e)=> this.receiverPrescriptionFileUpload(e.target.files[0])}/>
                    </div>
                  </div>
                  <div className="form-row my-3">
                    <div className="col-6">
                      <input type="number" minLength="10" maxLength="10" className="form-control" placeholder="Phone Number" value={this.state.receiverPhone} onChange={(e)=>this.setState({receiverPhone: e.target.value})}/>
                    </div>
                    <div className="col-6">
                      <input type="number" minLength="10" maxLength="10" className="form-control" placeholder="Alternate Number" value={this.state.receiverAlternatePhone} onChange={(e)=>this.setState({receiverAlternatePhone: e.target.value})} />
                    </div>
                  </div>
                  <input type="email" className="form-control my-3" placeholder="Email" value={this.state.receiverEmail} onChange={(e)=>this.setState({receiverEmail: e.target.value})}/>
                  <input type="text" className="form-control my-3" placeholder="Your locality" value={this.state.receiverLocality} onChange={(e)=>this.setState({receiverLocality: e.target.value})}/>
                </div>

              </div>
              <button type="button"
              disabled={!(this.state.receiverName !== ""
              && this.state.receiverBloodGroup !== ""
              && this.state.receiverGender !== ""
              && this.state.receiverAge !== ""
              && this.state.receiverHospitalName !== ""
              && this.state.receiverHospitalIPNumber !== ""
              && this.state.receiverAlternatePhone !== ""
              && this.state.receiverPhone !== ""
              && this.state.receiverEmail !== ""
              && this.state.receiverLocality !== ""
              && this.state.receiverPrescriptionFile !== "")}
               id="receiverSubmitButton" className="btn btn-primary w-auto m-3" data-dismiss="modal" onClick={() => this.receiverSubmit()}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
