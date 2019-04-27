import React, { Component } from "react";
import "./Men.css";
import API from "../utils/API";

class Mens extends Component {
  state = {
    boards: [],
    sorted: []

    
  };
 
  componentDidMount() {
    API.getFemaleBoards().then(res => this.setState({ boards: res.data }));
    
  
  
  }
  fetchSort() {
    API.getAllBoards().then(res => {
      this.setState({
       sorted: res.data
      });

      console.log(res.data);
    });
  }
  

  

  render() {
    return (
      
      <div className="capitaboards">
      <header>
     <div className = "container">
     <nav>
       <ul>
         <li><a href = "#">Home</a></li>
         <li><a href = "#">The MotherShip</a></li>
         <li><a href = "#">People</a></li>
       </ul>
     </nav>
     </div>
   </header>
        {/* <div className='iframe-container'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AxCwlnBCo88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    */}
        <div className="mens">
          <h1>WOMEN</h1>
        </div>
        <div className ='container-2'>
        <div className="form-1">
          <label>Sort By:</label>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>$$$ - $</span>
          </div>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>$ - $$$</span>
          </div>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>Most AWARDS</span>
          </div>
        </div>

        <div className="form-2">
          <label>Best For:</label>
          <div className="radio-group-1">
            <input type="radio" name="radio-1" value="price-1" />
            <span>SHOW ALL</span>
          </div>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>POWDER</span>
          </div>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>ALL MOUNTAIN</span>
          </div>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>PARK</span>
          </div>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>URBAN</span>
          </div>
          <div className="radio-group">
            <input type="radio" name="radio-1" value="price-1" />
            <span>WIDE</span>
          </div>
        </div>

        <div className="form-3">
          <label>MIN LENGTH</label>
          <select id="min-size" name="min_size">
            undefined<option value="143">143</option>
            <option value="145">145</option>
            <option value="147">147</option>
            <option value="148">148</option>
            <option value="149">149</option>
            <option value="150">150</option>
            <option value="151">151</option>
            <option value="151W">151W</option>
            <option value="152">152</option>
            <option value="153">153</option>
            <option value="153W">153W</option>
            <option value="154">154</option>
            <option value="155">155</option>
            <option value="155W">155W</option>
            <option value="156">156</option>
            <option value="157">157</option>
            <option value="157W">157W</option>
            <option value="158">158</option>
            <option value="158W">158W</option>
            <option value="159">159</option>
            <option value="159W">159W</option>
            <option value="160">160</option>
            <option value="161">161</option>
            <option value="161W">161W</option>
            <option value="162">162</option>
            <option value="164">164</option>
            <option value="165">165</option>
            <option value="166">166</option>
            <option value="167">167</option>
            <option value="169">169</option>
          </select>
        </div>
        <div className="form-4">
          <label>MAX LENGTH</label>
          <select id="min-size" name="min_size">
            undefined<option value="143">143</option>
            <option value="145">145</option>
            <option value="147">147</option>
            <option value="148">148</option>
            <option value="149">149</option>
            <option value="150">150</option>
            <option value="151">151</option>
            <option value="151W">151W</option>
            <option value="152">152</option>
            <option value="153">153</option>
            <option value="153W">153W</option>
            <option value="154">154</option>
            <option value="155">155</option>
            <option value="155W">155W</option>
            <option value="156">156</option>
            <option value="157">157</option>
            <option value="157W">157W</option>
            <option value="158">158</option>
            <option value="158W">158W</option>
            <option value="159">159</option>
            <option value="159W">159W</option>
            <option value="160">160</option>
            <option value="161">161</option>
            <option value="161W">161W</option>
            <option value="162">162</option>
            <option value="164">164</option>
            <option value="165">165</option>
            <option value="166">166</option>
            <option value="167">167</option>
            <option value="169">169</option>
          </select>
        </div>
        </div>

        <div className="container-1">
          {this.state.boards.map(board => (
            <div className="box-1">
              <img src={board.imgUrl} />
              <h4>{board.boardName}</h4>
              <p>{board.boardTitle}</p>
              <p>{board.price}</p>
            </div>
          ))}

    


          {/* second API SORT IS WORKING, BUTTON TO SORT BY RADIO SUBMISSION */}
             {/* <div className="container-1">
          {this.state.sorted.map(sort => (
            <div className="box-1">
              <img src={sort.imgUrl} />
              <h4>{sort.boardName}</h4>
              <p>{sort.boardTitle}</p>
            </div>
          ))}
        </div> */}
        </div>

     <div>
       <button onClick={this.fetchSort.bind(this)}>Click me</button>
     </div>
      </div>
    );
  }
}

export default Mens;

{
  /* 
// {board.imgUrl}
//{board.boardName}
//{board.boardTitle}
//{this.state.boards.map(board => () */
}


//fisrt created a state to store the filtered data.
// instert data into the state 