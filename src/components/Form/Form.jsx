// import { Label, Button, Input, StyledForm } from "styles/Form.styled";
// import { useDispatch } from "react-redux";
// import { PropTypes } from "prop-types";
// import { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "number":
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addContact(name, number));
//     setName("");
//     setNumber("");
//   };

//   return (
//     <div>
//       <StyledForm onSubmit={handleSubmit}>
//         <Label>
//           Имя
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             value={name}
//             onChange={handleChange}
//           />
//         </Label>
//         <Label>
//           Телефон
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             value={number}
//             onChange={handleChange}
//           />
//         </Label>

//         <Button type="submit">Add contact</Button>
//       </StyledForm>
//     </div>
//   );
// }

// export default Form;

// Form.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
// };
