import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components'

const LayoutContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background: linear-gradient(0deg, rgba(35, 34, 82, 1) 35%, rgba(84, 78, 107, 1) 100%);
`

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Nav />
			<main>{children}</main>
		</LayoutContainer>
	)
}

export default Layout
