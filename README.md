## Table of Contents

- [Installing the app](#installation)
- [Front-end](#frontend)
  - [Form](#form)
  - [Table](#table)
- [Back-end](#backend)
## Installation

1. Clone the repository into your local directory:
2. Open terminal in the respective directory and write the following instruction:
    ```
    npm install
    ```
## Front-End
The front-end is created using ReactJS, to create a efficient and fast user interface. The basic strutre of the front-end file directory is

    ```
      ttt/
      README.md
      node_modules/
      package.json
      server.js
      public/
        index.html
        favicon.ico
      src/
        images/
        navigation/
          navbar.js
        App.css
        App.js
        App.test.js
        form.js
        index.css
        index.js
        logo.js
        main-div.js
        r-table.js
        serviceWorker.js
    ```
The important components are:
  ### Form
  This components has the code which takes the input from user and sends it to the backend to fetch top n numbers with highest frequency.
  ```
  render(){
    return  (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit} className="form">
        <h3>Frequency Calculator</h3>
          <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
          <InputGroup>
            <FormControl
              type="number"
              placeholder="Enter the number"
              onChange={this.handleChange}
              required
            />
            <FormControl.Feedback />
            <InputGroup.Button>
            <Button onSubmit={this.handleSubmit} className="submit-button" type="submit">Submit</Button>
            </InputGroup.Button>
          </InputGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
  ```
  The above sends the input to backend and gets a response from Backend
  ```
  handleSubmit(e){
    e.preventDefault();
    const number = {
      value: e.target[0].value
    }
    e.target.reset();
    axios.post('/', number)
    .then(response => this.props.callBack(response))
    .catch(error => console.error('Error:', error));
  }
  ```

### Table
After we get a response from the backend having the list top n keywords we display it in a tabular format.
```
render(){
  return(
    <div className="table-div">
      <BootstrapTable data={this.state.data}
                      options={ { noDataText: 'Enter the number to display data' } }
                      >
        <TableHeaderColumn row='0' colSpan='2' dataAlign='center'>Frequency Data</TableHeaderColumn>
        <TableHeaderColumn row="1" dataField='keyword' isKey>Keyword</TableHeaderColumn>
        <TableHeaderColumn row="1" dataField='count'>Frequency</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}
```
## Back-End
 The backend of the app is created using express.js. The function of this part is to fetch the text file from 'http://terriblytinytales.com/test.txt' and compute frequency of all the words. Whenever a request is made from the front-end. The backend recieves the number n and in response, it sends top n numbers from the sorted frequency list.

 ```
 axios.get('http://terriblytinytales.com/test.txt')
   .then((response)=>{
     data = (response.data);
     let wordsArray = data.split(/\s+/);
     let wordsFreq = {};
     wordsArray.forEach((word)=>{
       if(wordsFreq.hasOwnProperty(word)){
         wordsFreq[word]++;
       }else{
         wordsFreq[word] = 1;
       }
     });
     let sortedFreq = [];
     sortedFreq = Object.keys(wordsFreq).map((word)=>{
       return {
         keyword: word,
         count: wordsFreq[word]
       };
     });
     sortedFreq.sort((a,b)=>{
       return b.count - a.count;
     })
     data = sortedFreq;
   })

 app.post('/',function(req,res) {
   const num = req.body.value;
   console.log(num);
    let newData = data.slice(0,num);
   return res.send(newData);
 })
 ```
