import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <p className={css.contactName}>{name}</p>
      <p className={css.contactNumber}>{number}</p>
      <button
        className={css.contactBtnDelete}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        {' '}
        Delete
      </button>
    </>
  );
};

export default ContactItem;
