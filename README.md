# edik.ly 

## Description

edik.ly is an organization app for SEO companies to manage all client content in one spot. It tracks all steps of the writing, from start to finish, and gives the user's client a dashboard to view all the progress. Keep a massive spreadsheet organized and ACID proof is challenging with too many hands in the cookie jar. Sprint Organizer eliminates all of this by limiting who can change what. By ensuring that all changes to the data to go through the project owner ('owner' from here on out), information is guaranteed to stay intact and productivity is improved as a result.

### The tech stack: 
*Backend:*
- Node.js
- PostgreSQL

*Frontend:*
- React
- Express

## Usage
- owner: full CRUD privlages (root user)
    an owner can create, read, update, and delete contributors
    an owner can create, read, update, and delete articles
- contributor: partial CRUD on articles assigned to them by owner
    a contributor can read and update ASSIGNED articles
    a contributor must own the article in order to read or update
- client: analytical dashboard of where things are at (i.e.- *number of completed articles per writer, breakdown of milestones, projected dates of other milestone completions, etc.*)
    a client can read all contributors and articles
    all other create, update, and delete functionality must go through owner
    client can oversee, not interact with project

## Features:

### Orgainze all project workflow data in one place
- Milestones
- URL's of original article
- Recommendations/updates to make
- Content updates (5-bullet pointed list)
- Focus keywords
- Wordpress URL
- Delivered Google Doc
- Workflow Status (ENUM dropdown)
- Writer (ENUM dropdown)
- Delivered Date
- Published Date
- Final Title
- Final Meta Description 
- Needs Images

### Allows for clear supervision of progress through client dashboard

### Eliminates contributors writing over eachothers' work as they only have access to their assigned articles

### Strech Features:
- Implement commenting functionality on the data to allow for better communication between the client, owner and contributors
- Integration w/ Google Sheets to offer easing migrating from your current Google Sheet to Sprint Organizer

## Data Models:
### ERD (16-12-21)
![erd_sprint_organizer](https://user-images.githubusercontent.com/64871999/146447716-eb2dc583-c2ed-48c5-953f-984c7c334a5f.png)

### User
- username
- first_name 
- last_name
- email
- password
- groups
- user_permissions
- is_staff
- is_activie
- is_superuser
- last_login
- date_joined
- *user_type_choices*: ((1, 'owner'), (2, 'contributor'), (3, 'client'))
*user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)*

### Articles
- milestone_group (integer)
- original_url (varchar)
- recommended_updates (varchar)
- content_updates (varchar)
- focus_keywords (varchar)
- wordpress_url (varchar)
- doc_url (varchar)
- status (ENUM) --> ('Not Started', 'Writing in Progress', 'Read For Internal Review', 'Writing Finish, Pending Approval', 'Approved & Posted', 'Not Approved, Rework', 'Consolidate', 'Unsalvagable', 'Questionable')
- contributor (FK)
- delivered_date
- published_date
- original_title 
- final_title
- meta_description
- needs_images (boolean)
### Comments 
- (coming soon...)

## Wireframes/Initial Design Ideas

### Color Scheme
![SPRINT_ORGANIZER_COLOR_SCHEME](https://user-images.githubusercontent.com/64871999/146467379-fa0bf779-5c4c-4db7-b620-1a5e4949bcf1.png)

### Client Dashboard (Desktop)
![SPRINT_ORGANIZER_CLIENT_DASHBOARD](https://user-images.githubusercontent.com/64871999/146467345-b27bad48-7cae-4f13-9fd1-9101f5d0d776.png)

### Client Dashboard (Mobile)
![SPRINT_ORGANIZER_CLIENT_DASHBOARD_MOBILE](https://user-images.githubusercontent.com/64871999/146467373-87ee46f1-1c86-44cf-a5b7-6751f4f38621.png)

## Support

### For any questions regarding this project, please email me directly at dev.howey@gmail.com

*See Roadmap below for more information on how the project is being implemented.*

## Roadmap
- Readme about the project and what the intention is
- Wireframes touching on key design points and functionality --> *views for: admin, writer, client*
- ERDs were applicable: spend time on these, otherwise you'll be refactor for 50% of your development time
- Build the back end, implementing your ERDs (test all routes with Postman before moving on!)
- Build the frontend using the wireframe as a map
- Connect the two together
- Implement testing of entire application (UX testing at this point)
- Deploy to Heroku or Netlify

## Contributing

Anyone interested in contributing is welcome to do so. Simply submit a pull request, and it will be reviewed promptly.

Please submit a pull request, and I'll be sure to review it ASAP. I am on GitHub daily.

## Authors and acknowledgment

Kevin McMahon
Michael D. Howey

## License

Apache License, Version 2.0 **

*To review the licensing, please visit https://www.apache.org/licenses/LICENSE-2.0.txt*
