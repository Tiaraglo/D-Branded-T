# P2-Challenge-2 (Client Side)

> Tuliskan API Docs kamu di sini

Thema : The Branded Things

# The Branded Things API Documentation

const url = 'https://server.yoelk20.tech'

## Models :

_User_
- email : string, unique (required)
- password : string (required)
- phoneNumber : string 
- address : string

_Product_
- name : string (required)
- price : string (required)
- imgUrl : string (required)
- categoryId : Integer (required)
- AuthorId : Integer (required)

_Category_
- name : string (required)


## Endpoints :

List of endpoints: 

- For CMS Site

- `path : "/login"`
            `{
                desc: Admin that have a authentication or token, can login for managing the product data,
            }`
            
            
- `path : "/"`
            {
                desc: Home or landing page that have a table of products with info for price, stoc, name, img, and some action for edit, delete, see the detail product and logout
            }

- `path : "/add"`

            {
                desc : to add new product
            }

- `path : "/edit/:id"`

            {
                desc : to edit one product
            }

- `path : "/detail/:id"`          
            {
                desc : to see the detail for one spesific product, by id
            }

- `path : "/editImg/:id"`  
            {
                desc :  to see the edit product spesificly by id
            }

- `path : "/add-user"`            
            {
                desc : feature for admin to add new user
            }
- `path : "/categories"` 
            {
                desc : to see lists of all categories
            }




- For Public Site

- `path : "/"` 
      {
        element: HomePage for public that have card of info for each products
      }

- `path : "/about"` 
      {
        element: a brief information about the website brand
      }

- `path : "/public/products/:id"` 
      {
        element: detail to get info for a spesific product, by id
      } 


- [v ] Link Deploy client
  - https://d-branded-t-cms.vercel.app for Content Management System
  - https://d-branded-t-public.vercel.app for Public Site
&nbsp;

