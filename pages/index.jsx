import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

import { experience, skills, projects } from '../profile'

const Index = () => {
  return (
    <Layout>
      {/* ==== HEADER CARD ==== */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img src="profile.jfif" alt="myProfile" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Snowman</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quae iusto delectus animi quasi, tempore exercitationem quo sunt voluptate voluptas explicabo deserunt porro autem. Eum a dolorum iure dolores eligendi!</p>
                <a href="/hire">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/** Second Section */}
      <div className="row py-3">
        <div className="col-md-4">
          <div className="card bg-light">

            <div className="card-body">
              <h1>Skills</h1>
              {
                skills.map(({ skill, percentage }, i) => (
                  <div className="py-3" key={i}>
                    <h5>{skill}</h5>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>

        <div className="col-md-8">
          <div className="card bg-light">

            <div className="card-body">
              <h1>Experience</h1>
              <ul>
                {
                  experience.map(({ title, description, from, to }, i) => (

                    <li key={i}>
                      <h3>{title}</h3>
                      <h5>{from}{" "}-{" "}{to ? to : 'current'}</h5>
                      <p>{description}</p>
                    </li>

                  ))
                }
              </ul>

              <Link href="/expreriences">
                <a className="btn btn-light">
                  See more
                </a>
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/** Portfolio */}
      <div className="row py-2">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>

              {
                projects.map(({ name, description, image }, i) => (
                  <div className="col-md-4 p-2" key={i}>
                    <div className="card h-100 py-3">
                      <div className="overflow">
                        <img src={image} alt="app" className="card-img-top" />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#">Know more</a>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>

            <div className="text-center mt-4">
              <Link href="/portfolio">
                <a className="btn btn-outline-light">More Projects</a>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default Index
