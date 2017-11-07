import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import 'prismjs/themes/prism-okaidia.css'
import { rhythm, scale } from '../utils/typography'

/** @TODO: Set up category template & query * */
class Template extends React.Component {
	render() {
		const { children } = this.props

		// const rootPath = (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) ? `${__PREFIX_PATHS__}/` : '/';

		const header = (
			<h1
				style={{
					...scale(1.5),
					marginBottom: rhythm(1.5),
					marginTop: 0,
				}}
			>
				<Link
					style={{
						boxShadow: 'none',
						textDecoration: 'none',
						color: 'inherit',
					}}
					to="/"
				>
					J. Aaron Eaton
				</Link>
			</h1>
		)
		return (
			<Container
				style={{
					maxWidth: rhythm(24),
					padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
				}}
			>
				{header}
				{children()}
			</Container>
		)
	}
}

Template.propTypes = {
	children: PropTypes.func.isRequired,
}

export default Template
