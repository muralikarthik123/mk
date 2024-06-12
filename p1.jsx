import React, { useState } from 'react';
import '../css/back.css';
import Img1 from '../images/ps1.jpeg'
import Img2 from '../images/frame.png'
import Ic1 from '@mui/icons-material/AccountBalanceWallet';
import Ic3 from '@mui/icons-material/FavoriteBorder';
import Ic4 from '@mui/icons-material/FileCopy';
import Ic5 from '@mui/icons-material/LockOpen';
import Ic6 from '@mui/icons-material/Share';
import Ic7 from '@mui/icons-material/QuestionMark';
import Ic8 from '@mui/icons-material/Settings';
import Ic9 from '@mui/icons-material/Edit';
import Ic10 from '@mui/icons-material/Phone';
import Ic11 from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Ic12 from '@mui/icons-material/PersonRounded';
import Ic13 from '@mui/icons-material/AccountBalanceWallet';
import Ic14 from '@mui/icons-material/QrCodeScanner';
import Ic15 from '@mui/icons-material/TransferWithinAStation';
import Ic16 from '@mui/icons-material/Toll';
import Ic17 from '@mui/icons-material/ReplyAll';
import Ic18 from '@mui/icons-material/MobileFriendly';
import Ic19 from '@mui/icons-material/Payments';
import Ic20 from '@mui/icons-material/LocalActivity';
import Ic21 from '@mui/icons-material/EmojiEvents';
import Ic22 from '@mui/icons-material/HealthAndSafety';
import Ic23 from '@mui/icons-material/Subscriptions';
import Ic24 from '@mui/icons-material/Movie';
import Ic25 from '@mui/icons-material/Quiz';
import Ic26 from '@mui/icons-material/School';
import Ic27 from '@mui/icons-material/AccessibilityNew';
import Ic28 from '@mui/icons-material/ArrowForwardIos';
import Ic29 from '@mui/icons-material/Delete';
import Ic30 from '@mui/icons-material/Favorite';
import Ic31 from '@mui/icons-material/WhatsApp';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import Img3 from '../images/refer1.jpeg';
import Img4 from '../images/refer2.jpeg';
import Ic32 from '@mui/icons-material/Twitter';
import Ic33 from '@mui/icons-material/Instagram';
import Ic34 from '@mui/icons-material/Facebook';
import Ic35 from '@mui/icons-material/CopyAll';
import Ic36 from '@mui/icons-material/Share';
import Ic37 from '@mui/icons-material/ArrowBack';

const EditableInput = ({ label, value, onChange, isEditing, onEditToggle }) => (
  <div style={{ width: 300, height: 40, marginBottom: 20, position: 'relative', borderRadius: 5 }}>
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={onChange}
      readOnly={!isEditing} // Make the input read-only if not in edit mode
      style={{
        width: '120%',
        height: '130%',
        paddingRight: '40px', // Provide space for the button inside the input
        boxSizing: 'border-box',
        paddingLeft: 20,
        borderRadius: 10,
      }}
    />
    <button
      onClick={onEditToggle}
      style={{
        position: 'absolute',
        right: -50,
        top: 5,
        bottom: 0,
        height: '100%',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
      }}
    >
      {isEditing ? <SaveIcon /> : <EditIcon />}
    </button>
  </div>
);



const App = () => {
  const [activeTab, setActiveTab] = useState('London');

  const openCity = (cityName) => {
    setActiveTab(cityName);
    
  };
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  // State to manage the text and edit mode
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Handle the text change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save the changes and exit edit mode
  const handleSave = () => {
    setIsEditing(false);
  };
 
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    qualifications: '',
    interests: '',
  });

  const [editStates, setEditStates] = useState({
    name: false,
    email: false,
    mobileNumber: false,
    qualifications: false,
    interests: false,
  });

  // Handle the text change
  const handleeChange = (name) => (e) => {
    setInputs({ ...inputs, [name]: e.target.value });
  };

  // Toggle edit mode
  const handleEditToggle = (name) => () => {
    setEditStates({ ...editStates, [name]: !editStates[name] });
  };



  
  return (
    <div style={{display:'flex'}}>
        {/*button1*/}
        <div>
        <button className='bt1'>My Account</button>
        </div>
        <br></br>
        <br></br>


        {/*border */}
      <div className="tab">
      <div>
      <div>
        <img style={{width:150,height:150,borderRadius:'50%',marginTop:20,marginLeft:92,postion:'fix'}} src={Img1} alt='Img1'/>
      </div>
        {imageSrc && (
        <div>
          <img 
            src={imageSrc} 
            alt="Selected" 
            style={{ 
              maxWidth: '100%',  
              borderRadius: '50%', 
              width: '180px', // Optional: set a fixed width to ensure a circular shape
              height: '180px',
              marginLeft:90,
              marginTop:-210, // Optional: set a fixed height to ensure a circular shape
            }} 
          />
        </div>
      )}
      <input style={{marginLeft:120}}type="file" accept="image/*" onChange={handleImageUpload} /> 
    </div>
        {/*name and id*/}
        <p style={{paddingLeft:50,paddingTop:10,color:'white'}}>Name:<span style={{paddingLeft:20}}>Karthik</span></p>
        <p style={{paddingLeft:35,color:'white'}}>SPIN ID:<span style={{paddingLeft:20}}>AP125XXXXX</span></p>
        {/*line*/}
        <hr className='line'></hr>
        {/*icon1 wallet*/}
        <div className='icon'>
            <div>
                <Ic1/>
            </div>
        {/*wallet text*/}
        <div className='text'>
            <p
          className={`tablinks ${activeTab === 'wallet' ? 'active' : ''}`}
          onClick={() => openCity('wallet')}
        >
          Wallet
        </p>
        </div>   
        </div>


        {/* button 2*/}
        <div className='icon2'>
            <div>
                <Ic12/>
            </div>
            <div className='text'>
                {/*otr form text button */}
            <p
            className={`tablinks ${activeTab === 'OTR' ? 'active' : ''}`}
            onClick={() => openCity('OTR')}
            >
            OTR Form
            </p>
        </div>
        </div>


        {/*button 3*/}
        <div className='icon2'>
            <div>
                <Ic3/>
            </div>
            <div className='text'>
                {/*saved jobs button*/}
            <p
                className={`tablinks ${activeTab === 'saved' ? 'active' : ''}`}
                onClick={() => openCity('saved')}
            >
                Saved Jobs
            </p>
        </div>
        </div>


        {/*button 4*/}
        <div className='icon2'>
            <div>
                <Ic4/>
            </div>
            <div className='text'>
                {/*PQP button*/}
            <p
                className={`tablinks ${activeTab === 'PQP' ? 'active' : ''}`}
                onClick={() => openCity('PQP')}
            >
                PQP
            </p>
        </div>
        </div>


        {/*button5*/}
        <div className='icon2'>
            <div>
                <Ic5/>
            </div>
            <div className='text'>
                {/*login button*/}
            <p
                className={`tablinks ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => openCity('login')}
            >
                Login Details
            </p>
        </div>
        </div>


        {/*button6*/}
        <div className='icon2'>
            <div>
                <Ic6/>
            </div>
            <div className='text'>
                {/*refer earn button*/}
            <p
                className={`tablinks ${activeTab === 'refer' ? 'active' : ''}`}
                onClick={() => openCity('refer')}
            >
                Refer & Earn
            </p>
        </div>
        </div>


        {/*button7*/}
        <div className='icon2'>
            <div>
                <Ic7/>
            </div>
            <div className='text'>
                {/*help button*/}
            <p
                className={`tablinks ${activeTab === 'help' ? 'active' : ''}`}
                onClick={() => openCity('help')}
            >
                Help & Support
            </p>
        </div>
        </div>


        {/*button8*/}
        <div className='icon2'>
            <div>
                <Ic8/>
            </div>
            <div className='text'>
                {/* setting button*/}
            <p
                className={`tablinks ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => openCity('settings')}
            >
                Settings
            </p>
        </div>
        </div>
        

        {/*button9*/}
        <div className='icon2'>
            <div>
                <Ic5/>
            </div>
            <div className='text'>
                {/*change button*/}
            <p
                className={`tablinks ${activeTab === 'change' ? 'active' : ''}`}
                onClick={() => openCity('change')}
            >
                Change Password
            </p>
        </div>
        </div>


      </div>



{/*responces section*/}

        {/*wallet responces*/}
      <div className={`wallet ${activeTab === 'wallet' ? 'active' : ''}`} id="London">
        <img style={{width:610,height:310}}src={Img2} alt='Img2' />
        <h3 style={{paddingLeft:100,marginTop:-280}}>Wallet Balance:</h3>
        <h3 style={{paddingLeft:100}}>RS 500/-</h3>
        <div style={{marginLeft:400,marginTop:-50}}>
            <button style={{width:150,height:40,border:'none',borderRadius:20,backgroundColor:'#8de3f2',fontSize:18}}><b>WithDraw</b></button>
        </div>
        {/*add money pay transfer button*/}
        <div style={{display:'flex',marginLeft:140,marginTop:160}}>
            {/*add money button*/}
            <div className='walleticcolor' style={{width:90,height:80,paddingLeft:35,paddingTop:10}}>
                <Ic13  style={{fontSize:40,marginLeft:-13}}/>
                <p style={{marginLeft:-30,marginTop:1,width:100}} >Add money</p>
            </div>
            {/* pay button*/}
            <div className='walleticcolor' style={{width:90,height:80,marginLeft:30,paddingLeft:30,paddingTop:15}}>
                <Ic14 style={{fontSize:40,marginLeft:-5}}/>
                <p style={{marginTop:-3}}>pay</p>
            </div>
            {/*Transfer button*/}
            <div className='walleticcolor' style={{width:90,height:80,marginLeft:30,paddingLeft:30,paddingTop:15}}>
                <Ic15 style={{fontSize:40,marginLeft:-5}}/>
                <p style={{marginTop:1,marginLeft:-10}}>Transfer</p>
            </div>
        </div>

        {/*Services border*/}
        <div  style={{border:'1px solid black',width:600,height:300,marginLeft:10,marginTop:50,color:'black'}}>
            <h2 style={{paddingLeft:20}}>Services</h2>
            {/*1st services row*/}
            <div style={{display:'flex'}}>
                {/*send money*/}
                <div>
                    <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic16/></button>
                    <p style={{fontSize:11,paddingLeft:30}}>Send money</p>
                </div>
                <div>
               {/*request money*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic17/></button>
               <p style={{fontSize:11,paddingLeft:45}}>Request </p>
               <p style={{fontSize:11,paddingLeft:45}}>Money</p>
               </div>
               <div>
               {/*Mobile reacharge button*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic18/></button>
               <p style={{fontSize:11,paddingLeft:40}}>Mobile </p>
               <p style={{fontSize:11,paddingLeft:40}}>Recharge </p>
               </div>
               <div>
                {/*Pay Bills*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic19/></button>
               <p style={{fontSize:11,paddingLeft:35}}>Pay Bills</p>
               </div>
               <div>
                {/*Ticket Booking*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic20/></button>
               <p style={{fontSize:11,paddingLeft:30}}>Ticket Booking</p>
               </div>
               {/*Reward &cashback*/}
               <div>
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic21/></button>
               <p style={{fontSize:11,paddingLeft:40}}>Rewards </p>
               <p style={{fontSize:11,paddingLeft:40}}>&Cashbacks</p>
               </div>
            </div>

            {/*2nd row of services */}
            <div style={{display:'flex'}}>
                {/*Insurance button*/}
                <div>
                    <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic22/></button>
                    <p style={{fontSize:11,paddingLeft:30}}>Insurance</p>
                </div>
                <div>
               {/*Subscription*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic23/></button>
               <p style={{fontSize:11,paddingLeft:30}}>Subscription </p>
               </div>
               <div>
               {/*Watch and earn*/}
               <button style={{marginLeft:35,width:60,height:50,borderRadius:10,border:'none'}}><Ic24/></button>
               <p style={{fontSize:11,paddingLeft:45}}>Watch & </p>
               <p style={{fontSize:11,paddingLeft:45}}>earn </p>
               </div>
               <div>
                {/*Quizzes*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic25/></button>
               <p style={{fontSize:11,paddingLeft:40}}>Quizzes</p>
               </div>
               <div>
                {/*Cources*/}
               <button style={{marginLeft:30,width:60,height:50,borderRadius:10,border:'none'}}><Ic26/></button>
               <p style={{fontSize:11,paddingLeft:40}}>Cources</p>
               </div>
               {/*Reward &cashback*/}
               <div>
               <button style={{marginLeft:40,width:60,height:50,borderRadius:10,border:'none'}}><Ic27/></button>
               <p style={{fontSize:11,paddingLeft:50}}>Rewards </p>
               </div>
            </div>
        </div>   
      </div>
   

{/*otr form responces*/}
     
      <div className={`otr ${activeTab === 'OTR' ? 'active' : ''}`} id="OTR">
        {/*otr forms*/}
        <div>
        <p style={{marginTop:-40,fontWeight:1000,fontSize:20}}>OTR FORM</p>
        </div>
        <div>
        {isEditing ? (
        <div style={{marginLeft:-13,marginTop:-3}}>
          <input 
            type="text"
            value={text}
            onChange={handleChange}
            onBlur={handleSave} // Exit edit mode when input loses focus
            autoFocus
            style={{ width:500, height: '420px',borderRadius:20}}
          />
          <div style={{marginTop:-400,marginLeft:400}}>
            <button className='edit' onClick={handleSave} style={{ height: '46px',width:80 }}>
              Save
            </button>
          </div>
   
        </div>
      ) : (
        <div>
          <span>{text}</span>
         
          <button className='edit'  onClick={handleEdit} style={{ marginLeft: '388px',height:'46px',width:'80px',marginTop:15 }}>
            Edit
          </button>
           <div style={{marginLeft:390,marginTop:-35,color:'white'}}>
            <Ic9/>
          </div>
        </div>
      )}
        </div>
      </div>
      <div>
       
      </div>
      

{/*saved jobs responces*/}
      <div className={`saved ${activeTab === 'saved' ? 'active' : ''}`} id="saved">
        <div  style={{marginTop:-70,fontSize:30,marginLeft:10}}>
            {/*icon with saved jobs name*/}
            <Ic28/>
            <p style={{marginLeft:30,marginTop:-35}}>Saved Jobs</p>
            {/*border1 for the job every thing*/}
            <div style={{border:'1px solid black',width:750,height:530,borderRadius:20}}>
                <p style={{textAlign:'center',textDecoration:'underline',fontWeight:1000,}}>Osmania University</p>
                {/*heart icon */}
                <div style={{marginLeft:700,color:'#eb2a6a',marginTop:-60}}>
                    <Ic30/>
                </div>
                {/*telangana state content */}
                <div style={{width:650,fontSize:20,height:50,marginLeft:30,backgroundColor:'#c8cfcc'}}>
                    <p style={{paddingLeft:160,fontWeight:1000,paddingTop:10}}>Telangana State Eligibility Test 2024</p>
                </div>
                {/*qualifications*/}
                <p style={{fontWeight:1000,fontSize:20,paddingLeft:30}}>Job Description:</p>
                <br></br>
                {/*qualifiactions*/}
                <p style={{fontSize:20,marginTop:-40,paddingLeft:30}}>Government of telangana has given an employment notification for telangana state eligibility test (ts set 2024)</p>
                <p style={{fontWeight:1000,fontSize:20,paddingLeft:30}}>Qualification:</p>
                <br></br>
                {/*date of posted and last date*/}
                <p style={{fontSize:20,marginTop:-40,paddingLeft:30}}>Government of telangana has given an employment notification for telangana state eligibility test (ts set 2024)</p>
                <b style={{fontSize:20,paddingLeft:30}}>Post Dated:</b>
                <p style={{fontSize:20,marginLeft:180,marginTop:-25}}>08-08-2024</p>
                <b style={{fontSize:20,paddingLeft:30}}>Posted 12 days ago</b>
                <b style={{fontSize:20,marginLeft:280}}>Last Date:</b>
                <p style={{fontSize:20,paddingLeft:620,marginTop:-25}}>30-08-2-2024</p>
                <br></br>
                <br></br>
                {/*delete button */}
                <div style={{marginTop:-70,marginLeft:80}}>
                    <button className='delete1'>Delete</button>
                    <div style={{marginTop:-35,marginLeft:20,color:'white'}}>
                        <Ic29/>
                    </div>
                </div>
                {/*Apply button*/}
                <div style={{marginLeft:540,marginTop:-35}}>
                <button style={{width:130,height:40,backgroundColor:'#000C40',color:'white',fontWeight:1000,border:'none',borderRadius:20}}>Apply</button>
                </div>
            </div>
        </div>
      </div>



{/*pqp responces*/}
      <div className={`tabcontent ${activeTab === 'PQP' ? 'active' : ''}`} id="PQP">
        <h3>PQP</h3>
      </div>


{/*login responces*/}
      <div className={`login ${activeTab === 'login' ? 'active' : ''}`} id="login">
        {/*login details*/}
        <h1 style={{paddingLeft:130}}>Login Details</h1>
        <p style={{paddingLeft:140}}>Mange your Login Details</p>
        {/*login input like name,userid,passowrd,intrest*/}
        <div>
        <div style={{ marginLeft: 80, marginTop: 100 }}>
      {Object.keys(inputs).map((key) => (
        <div key={key} style={{ marginBottom: 20 }}>
          <EditableInput
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={inputs[key]}
            onChange={handleeChange(key)}
            isEditing={editStates[key]}
            onEditToggle={handleEditToggle(key)}
          />
        </div>
      ))}
    </div>
        </div>
      </div>



{/*refer earn responces */}
      <div >
        <div className={`refer ${activeTab === 'refer' ? 'active' : ''}`} id="refer">
        <div className='refericons'>
          <div style={{marginLeft:20,paddingTop:30}}>
            <Ic37 style={{fontSize:30}}/>
          </div>
            <p style={{textAlign:'center',paddingTop:10,fontWeight:1000,fontSize:20}}>Refer and Earn </p>
        </div>
        <div style={{display:'flex',marginTop:-120,marginLeft:190}}>
          <div >
            <img style={{width:100,height:100,borderRadius:50,marginTop:-30}} src={Img3} alt='Img3'/>
          </div>
          <br></br>
          <div >
          <img style={{width:100,height:100,borderRadius:50,marginLeft:80,marginTop:-30}} src={Img4} alt='Img4'/>
          </div>
        </div>
        <h3 style={{paddingLeft:150}}>Send a Referral Link to Your Friend</h3>
        
        {/*first row of the refer and earn and its icons*/}
        <div className='refericons1'>

          {/*icon 1*/}
            <div style={{width:250,height:50,marginLeft:200,backgroundColor:'white',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                <p style={{paddingLeft:45,paddingTop:20}}>Your friend SIGNS UP</p>
            </div>
            <div style={{marginTop:-20,marginLeft:10}} >
              <img style={{width:90,height:90,borderRadius:50}}src={Img3} alt='Img3'/>
            </div>
            {/*u get 2*/}
            <h4 style={{width:60,marginTop:-70,marginLeft:100}}>You get</h4>
            <h4 style={{width:60,marginLeft:100}}>Rs 2</h4>

            {/*icon2*/}
            <div style={{marginLeft:503,marginTop:-100}}>
              <img style={{width:90,height:90,borderRadius:50}}src={Img4} alt='Img4'/>
            </div>
            {/*you get 5*/}
            <h4 style={{width:60,marginTop:-70,marginLeft:440}}>You get</h4>
            <h4 style={{width:60,marginLeft:440}}>Rs 5</h4>
        </div>
        <br></br>
        <br></br>

        {/*secound row of the refer and earn*/}
        <div className='refericons1'>
            <div style={{width:250,height:50,marginLeft:200,backgroundColor:'white',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                <p style={{paddingLeft:45,paddingTop:10,width:200}}>When Your friend completes first apply</p>
            </div>
            {/*icon of secound row*/}
            <div style={{marginTop:-20,marginLeft:10}}>
            <img style={{width:90,height:90,borderRadius:50}}src={Img3} alt='Img3'/> 
            </div>
            <p style={{width:400,paddingLeft:120,fontWeight:1000,marginTop:-60}}>You get ADDITIONAL amount of Rs20</p>
        </div>
        {/* button to open in whatapp*/}
        <button className='whatapp1'>See WHOS's ON APP</button>
        <br></br>
        <p style={{paddingLeft:280,fontWeight:1000}}>Refer VIA</p>
        {/*refered apps*/}
        <div style={{width:540,height:75,marginLeft:60,backgroundColor:'#26decf',borderRadius:10}}>
            <Ic31  className='whatapp' style={{fontSize:30,marginLeft:40,marginTop:10,borderRadius:40}}/>
            <p style={{fontWeight:1000,marginTop:0,marginLeft:20}}>Whatsapp</p>
            {/*twiter*/}
            <div style={{marginTop:-65,marginLeft:180,}}>
              <Ic32  style={{color:'white',backgroundColor:'#07cdf5',fontSize:30,borderRadius:2}}/>
              <p style={{fontWeight:1000,marginLeft:-10,marginTop:0}}>Twitter</p>
            </div>
            {/*instagram*/}
            <div style={{marginTop:-65,marginLeft:320,}}>
              <Ic33  style={{color:'white',backgroundColor:'#07cdf5',fontSize:30,borderRadius:2}}/>
              <p style={{fontWeight:1000,marginLeft:-10,marginTop:0}}>Instagram</p>
            </div>
            {/*facebook*/}
            <div style={{marginTop:-65,marginLeft:460,}}>
              <Ic34  style={{color:'white',backgroundColor:'#07cdf5',fontSize:30,borderRadius:2}}/>
              <p style={{fontWeight:1000,marginLeft:-10,marginTop:0}}>Facebook</p>
            </div>
        </div>
        {/*referals and earn*/}
        <div style={{border:'1px solid black',width:540,height:100,marginLeft:60,marginTop:10}}>
          <p>REFERRAL CODE</p>
          <p>Staya3845</p>
          {/*copy*/}
          <div style={{display:'flex',marginTop:-60,marginLeft:430}}>
            <div>
              <Ic35/>
              <p>Copy</p>
            </div>
            <div style={{marginLeft:20}}>
              <Ic36/>
              <p>Share</p>
            </div>
          </div>
        </div>
        </div>
      </div>



      {/*help and support responces*/}
      <div className={`help ${activeTab === 'help' ? 'active' : ''}`} id="help">
        {/*help and support margin*/}
        <div className='support'>
            <h1 style={{paddingLeft:140}}>Help and Support</h1>
        </div>
        <p style={{paddingLeft:180,fontSize:20,paddingTop:40}}>Contact Options</p>
        <div style={{marginLeft:80,marginTop:130,border:'1px solid black',width:150,height:150,borderRadius:10}}>
            <br></br>
            <br></br>
            <div style={{paddingLeft:60,color:'green'}}>
                <Ic10/>
            </div>
            <p style={{paddingLeft:30}}>Call Available 24/7</p>
        </div>
        <div style={{marginLeft:300,marginTop:-150,border:'1px solid black',width:150,height:150,borderRadius:10}}>
            <div style={{paddingLeft:60,paddingTop:50}}>
                <Ic11/>
            </div>
            <p style={{paddingLeft:50}}>Chat</p>
        </div>
      </div>

      {/*Settings*/}

      <div className={`settings ${activeTab === 'settings' ? 'active' : ''}`} id="help">
        <div className='support'>
            <p style={{paddingLeft:220,fontSize:30}}>Settings</p>
        </div>
        <div style={{display:'flex'}}>
        <div>
        <p style={{paddingLeft:100,paddingTop:50,fontSize:20}} >Change Langauge</p>
        </div>
        <div>
        <select style={{height:40,fontSize:20,marginTop:60,marginLeft:30,width:180,paddingLeft:50}}>
        
            <option >English</option>
            <option >Hindi</option>
            <option >Telugu</option>
            <option >Tamil</option>
        </select>
        </div>
        </div>
        {/*buttons for settings*/}
        <p style={{paddingLeft:100,paddingTop:10,fontSize:20}} >Delete Account<span><button className='delete' style={{marginLeft:50,height:50,width:200,fontSize:20}}>Delete</button></span></p>
        <p style={{paddingLeft:100,paddingTop:10,fontSize:20}}>Notifications<span><input style={{marginLeft:50,height:15,width:60,fontSize:20}} type='Radio'/>Off</span><span><input style={{marginLeft:20,height:15,width:60,fontSize:20,marginTop:10}} type='Radio'/>ON</span></p>
        <p style={{paddingLeft:100,paddingTop:10,fontSize:20}}>Change Password<span><input style={{width:250,height:40,marginLeft:20,borderRadius:5,border:'1px solid black'}} type='text' placeholder='Enter previous Password' /></span></p>
        <input style={{width:250,height:40,marginLeft:285,borderRadius:5,border:'1px solid black'}} type='text' placeholder='Enter New Password' />
        <input style={{width:150,height:40,marginLeft:285,marginTop:20,borderRadius:5,border:'1px solid black'}} type='text' placeholder=' Enter Mobile No.' />
        <button style={{height:40,marginLeft:10}}>Send OTP</button>
        <input style={{width:150,height:40,marginLeft:285,marginTop:20,borderRadius:5,border:'1px solid black'}} type='text' placeholder='Mobile OTP' />
        <button style={{height:40,marginLeft:10,width:80}}>OTP</button>
      </div>

      {/*Change Password*/}
      <div className={`tabcontent ${activeTab === 'change' ? 'active' : ''}`} id="help">
        <h3 >Change password</h3>
      </div>
    </div>
  );
};

export default App;
