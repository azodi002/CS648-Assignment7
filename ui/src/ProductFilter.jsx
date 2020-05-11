import React from 'react';
import { Label } from 'react-bootstrap';
import graphQLFetch from './graphQLFetch.js';

export default class ProductFilter extends React.Component {

  constructor() {
    super();
    this.total_counts = 0;
  }


  componentDidMount() {
  	this.loadData();
  }

  componentDidUpdate() {
  	this.loadData();
  }

  async loadData() {
    
    const query = `query {
      productCounts 
      
    }`;

 	
    const data = await graphQLFetch(query);			
    if(data) {
    	this.total_counts = data.productCounts;
    }
  }

  render() {
    return (
			<div> <Label> Showing {this.total_counts} available products</Label> </div> )
  }
}