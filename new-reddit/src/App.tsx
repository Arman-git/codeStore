import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { Card } from "./shared/CardsList/Card";



function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList>
                        <Card />
                </CardsList> 
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent);