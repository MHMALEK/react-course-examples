import React from "react";
import ContactItem from "../contact-item";
import styles from "./style.module.scss";

const mockApiData = [
  {
    name: "Mahsa",
    familyName: "Pahlevani",
    phoneNumber: "+98912123456",
    ID: 0,
  },
  {
    name: "Ali",
    familyName: "Malek",
    phoneNumber: "+98912123456",
    ID: 1,
  },
  {
    name: "Sara",
    familyName: "Eyvani",
    phoneNumber: "+98912123456",
    ID: 2,
  },
];

const fetchFromMockApiEndPoint = (shouldShowError = false) =>
  new Promise((resolvePromise, rejectPromise) =>
    setTimeout(() => {
      return !shouldShowError
        ? resolvePromise(mockApiData)
        : rejectPromise(new Error("Mock API failed"));
    }, 1500)
  );

const sampleContactData = {
  name: "Ali",
  familyName: "Malek",
  phoneNumber: "+98912123456",
  ID: 12,
};

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: [],
      filteredResult: null,
    };
  }
  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = async () => {
    const res = await fetchFromMockApiEndPoint();
    this.setState({
      contactsList: res,
    });
  };

  filterContacts = (query) => {
    const { contactsList } = this.state;
    if (query === "") {
      this.setState({
        filteredResult: [],
      });
      return;
    }
    const filteredResult = contactsList.filter((contact) => {
      const { name } = contact;
      return name.toLowerCase().search(query.toLowerCase()) !== -1;
    });

    console.log(filteredResult);
    this.setState({
      filteredResult,
    });
  };

  handleSearchContact = (event) => {
    const { target } = event;
    const { value } = target;
    this.filterContacts(value);
  };

  renderFilterItems = () => {
    if (!this.state.filteredResult) {
      return null;
    }
    if (!this.state.filteredResult.length === 0) {
      return <p>No result found</p>;
    } else {
      return this.state.filteredResult.map((result, index) => (
        <ContactItem contactData={result} key={index} />
      ));
    }
  };

  render() {
    return (
      <div className={styles.listWrapper}>
        <div>
          <input onChange={this.handleSearchContact} value={this.state.query} />
        </div>
        <h2>filtered list </h2>
        {this.renderFilterItems()}

        <h2>list </h2>
        {this.state.contactsList.length > 0 &&
          this.state.contactsList.map((contact, index) => {
            return <ContactItem contactData={contact} key={index} />;
          })}
      </div>
    );
  }
}

export default ContactList;
