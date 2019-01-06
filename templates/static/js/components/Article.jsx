import React, { Component } from 'react';
export default class Article extends Component {
    render() {
 const {article} = this.props
       return (
          <div className='item'>
		  <div className='image'>
		   	<img src={article.productImageUrl} />
		  </div>
		  <div className='middle aligned content'>
			   <div className='header'>
			   	<i className='large caret up icon' />
			   	<b>{article.clapps}</b>
			   </div>
			   <div className='description'>
			    	<a href={article.url}>{article.title}</a>
			    	<p>{article.description}</p>
			   </div>
			   <div className='extra'>
			    	<span>Published by: </span>
			    	<img className='ui avatar image'    src={article.submitterAvatarUrl} />
			    	<span className='author'>{article.author} </span>
			   </div>
		  </div>
 </div>
)
    }
}
