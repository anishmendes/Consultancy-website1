import './form.css'
import { React, useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [score, setScore] = useState("6.5");
    const [country, setCountry] = useState({
        english: true,
        maths: false,
        physics: false,
        nepali:true,
    });
    const [photo, setPhoto] = useState("");
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
            score,
            selectedOption,
            country,
            photo,
            url,
            about
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setCountry((prev) => ({
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
        setScore("6.5");
        setCountry({
            usa: true,
            canada: false,
            uk: false,
            aus: false,
        });
        setPhoto("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

  return (
    <div className='mainform'>
           <img src="/images/signup.gif" alt="gif"  className='gifform'/>
 

           <div className="App">
{/* <h1>Register Here</h1> */}
<fieldset>
    <form action="#" method="get">
        <label for="firstname"
        className='labelform'
        >
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
        <label for="lastname" className='labelform'>Last Name*</label>
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
        <label for="email" className='labelform'>Enter Email* </label>
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
        <label for="tel" className='labelform'>Contact*</label>
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
        <label for="score" className='labelform'>Score*</label>
        <input
            type="radio"
            name="score"
            value="6.5/more"
            id="6.5/more"
            checked={score === "6.5/more"}
            onChange={(e) =>
                setScore(e.target.value)
            }
        />
        6.5/more
        <input
            type="radio"
            name="score"
            value="6.5/less"
            id="6.5/less"
            checked={score === "6.5/less"}
            onChange={(e) =>
                setScore(e.target.value)
            }
        />
        6.5/less
        <input
            type="radio"
            name="score"
            value="gap"
            id="gap"
            checked={score === "gap"}
            onChange={(e) =>
                setScore(e.target.value)
            }
        />
        Gap Year
        <label for="lang" className='labelform'>
            Your Destination
        </label>
        <input
            type="checkbox"
            name="lang"
            id="usa"
            checked={country.usa === true}
            onChange={(e) =>
                handleSubjectChange("usa")
            }
        />
        USA
        <input
            type="checkbox"
            name="lang"
            id="canada"
            checked={country.canada === true}
            onChange={(e) =>
                handleSubjectChange("canada")
            }
        />
        Canada
        <input
            type="checkbox"
            name="lang"
            id="uk"
            checked={country.uk === true}
            onChange={(e) =>
                handleSubjectChange("uk")
            }
        />
        UK
        <input
            type="checkbox"
            name="lang"
            id="aus"
            checked={country.aus === true}
            onChange={(e) =>
                handleSubjectChange("aus")
            }
        />
        Aus
        <label for="file" className='labelform'>Upload Your Photo*</label>
        <input
            type="file"
            name="file"
            id="file"
            onChange={(e) =>
                setPhoto(e.target.files[0])
            }
            placeholder="Enter Upload File"
            required
        />
        <label for="url" className='labelform'>Enter URL*</label>
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
        <label className='labelform'>Select your course</label>
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
        <label for="about" className='labelform'>About</label>
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
            className='buttonform'
        >
            Reset
        </button>
        <button
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
            className='buttonform'
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


