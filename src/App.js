import {Component} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Bookshelves from './components/Bookshelves'
import MyFavorites from './components/MyFavorites'
import BookDetails from './components/BookDetails'
import FavoriteContext from './Context/FavoriteContext'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {favoriteList: []}

  onToggleFavorite = bookDetails => {
    const {favoriteList} = this.state
    const isAlreadyExist = favoriteList.some(
      eachItem => eachItem.id === bookDetails.id,
    )

    if (isAlreadyExist === true) {
      this.setState(prevState => ({
        favoriteList: prevState.favoriteList.filter(
          eachBook => eachBook.id !== bookDetails.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        favoriteList: [...prevState.favoriteList, bookDetails],
      }))
    }
  }

  render() {
    const {favoriteList} = this.state

    return (
      <FavoriteContext.Provider
        value={{
          favoriteList,
          onToggleFavorite: this.onToggleFavorite,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/shelf" component={Bookshelves} />
          <ProtectedRoute exact path="/favorite" component={MyFavorites} />
          <ProtectedRoute exact path="/books/:id" component={BookDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </FavoriteContext.Provider>
    )
  }
}

export default App
