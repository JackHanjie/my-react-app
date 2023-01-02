import styled from "styled-components"

export const Container = styled.div`
    z-index: 2222;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: white;
    padding-top: 2.8rem;
    .back {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        margin: 0.8rem 0 0 1rem;
        svg {
            width: 1.2rem;
            height: 1.2rem;
        }
        
    }
    
    .top {
        // height: 50%;
        overflow: hidden;
        padding: 0.5rem 1rem;
        img {
            width: 100%;
            border-radius: 1rem;
        }
    }
    .mid {
        padding: 0.5rem 1rem;
        
        table, td, th {
            border: 1px solid black;
            text-align: center;
        }

        th {
            height: 3rem;
        }

        td {
            height: 4rem;
        }

        
        tr:nth-child(even) {
            background-color: #fff;
        }
        
          
        table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 1rem;
        }
    }
`