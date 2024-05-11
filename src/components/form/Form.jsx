import './form.css'
import { React, useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] =
        useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };
    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

  return (
    <div className='mainform'>
           <img src="/images/signup.gif" alt="gif"  className='gifform'/>
 

           <div className="App">
<h1>Register Here</h1>
<fieldset>
    <form action="#" method="get">
        <label for="firstname">
            First Name*
        </label>
        <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) =>
                setFirstName(e.target.value)
            }
            placeholder="Enter First Name"
            required
        />
        <label for="lastname">Last Name*</label>
        <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) =>
                setLastName(e.target.value)
            }
            placeholder="Enter Last Name"
            required
        />
        <label for="email">Enter Email* </label>
        <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) =>
                setEmail(e.target.value)
            }
            placeholder="Enter email"
            required
        />
        <label for="tel">Contact*</label>
        <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) =>
                setContact(e.target.value)
            }
            placeholder="Enter Mobile number"
            required
        />
        <label for="gender">Score*</label>
        <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) =>
                setGender(e.target.value)
            }
        />
        6.5/more
        <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) =>
                setGender(e.target.value)
            }
        />
        6.5/less
        <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) =>
                setGender(e.target.value)
            }
        />
        Gap Year
        <label for="lang">
            Your Destination
        </label>
        <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) =>
                handleSubjectChange("english")
            }
        />
        USA
        <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) =>
                handleSubjectChange("maths")
            }
        />
        Canada
        <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) =>
                handleSubjectChange("physics")
            }
        />
        UK
        <label for="file">Upload Your Photo*</label>
        <input
            type="file"
            name="file"
            id="file"
            onChange={(e) =>
                setResume(e.target.files[0])
            }
            placeholder="Enter Upload File"
            required
        />
        <label for="url">Enter URL*</label>
        <input
            type="url"
            name="url"
            id="url"
            onChange={(e) =>
                setUrl(e.target.value)
            }
            placeholder="Enter url"
            required
        />
        <label>Select your course</label>
        <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) =>
                setSelectedOption(
                    e.target.value
                )
            }
        >
            <option
                value=""
                disabled
                selected={selectedOption === ""}
            >
                Select your Ans
            </option>
            <optgroup label="For USA">
                <option value="1">ITETLS</option>
                <option value="2">GRE</option>
                <option value="3">
                    TOFEL
                </option>
            </optgroup>
            <optgroup label="FOR AUS">
                <option value="4">ITETLS</option>
                <option value="5">PTE</option>
                <option value="6">
                    other
                </option>
               
            </optgroup>
        </select>
        <label for="about">About</label>
        <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) =>
                setAbout(e.target.value)
            }
            placeholder="About yourself"
            required
        ></textarea>
        <button
            type="reset"
            value="reset"
            onClick={() => handleReset()}
        >
            Reset
        </button>
        <button
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
        >
            Submit
        </button>
    </form>
</fieldset>
</div>
    </div>



  )
}

export default Form


