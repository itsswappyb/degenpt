"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutGrid,
  Search,
  History,
  MessageSquare,
  ArrowLeft,
  Bell,
  User,
} from "lucide-react";

export function CryptoWalletComponent() {
  const [chatMessages, setChatMessages] = useState([
    { sender: "You", message: "What is the price of ETH?" },
    {
      sender: "Fungi",
      message: "The price of Wrapped Ether (WETH) is $3507.18 USD.",
    },
    { sender: "You", message: "Swap 3 DAI to WETH" },
    {
      sender: "Fungi",
      message:
        "I have initiated the swap of 3 DAI to WETH. You will receive confirmation prompt shortly.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { sender: "You", message: inputMessage },
      ]);
      setInputMessage("");
      // Here you would typically call an API to get the AI response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "Fungi",
            message:
              "I understand you want to perform an action. How can I assist further?",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4 hidden md:block">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-purple-500 rounded-full mr-2"></div>
          <span className="font-bold text-lg">Crypto Wallet</span>
        </div>
        <nav>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <LayoutGrid className="mr-2 h-4 w-4" /> Portfolio
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Search className="mr-2 h-4 w-4" /> Discover
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <History className="mr-2 h-4 w-4" /> History
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <MessageSquare className="mr-2 h-4 w-4" /> Chats
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <header className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <Button variant="ghost" size="icon" className="mr-2">
              <Bell className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>My Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">$20.54</div>
              <div className="text-sm text-gray-500">My Cash: $9.32</div>
              <Tabs defaultValue="tokens" className="mt-4">
                <TabsList>
                  <TabsTrigger value="tokens">Tokens</TabsTrigger>
                  <TabsTrigger value="hyphae">Hyphae</TabsTrigger>
                  <TabsTrigger value="trades">Trades</TabsTrigger>
                  <TabsTrigger value="pools">Pools</TabsTrigger>
                </TabsList>
                <TabsContent value="tokens">
                  <table className="w-full mt-2">
                    <thead>
                      <tr>
                        <th className="text-left">Token</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DAI</td>
                        <td>$1.00</td>
                        <td>5.32 DAI</td>
                      </tr>
                      <tr>
                        <td>USDC</td>
                        <td>$1.00</td>
                        <td>3.99 USDC</td>
                      </tr>
                      <tr>
                        <td>ETH</td>
                        <td>$3507.18</td>
                        <td>0.00114 ETH</td>
                      </tr>
                    </tbody>
                  </table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <div className="h-[500px] overflow-y-auto p-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      msg.sender === "You" ? "text-right" : ""
                    }`}
                  >
                    <div className="font-bold">{msg.sender}</div>
                    <div
                      className={`inline-block p-2 rounded-lg ${
                        msg.sender === "You" ? "bg-purple-100" : "bg-gray-100"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <div className="flex">
                  <Input
                    placeholder="What can I do for you?"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-grow mr-2"
                  />
                  <Button onClick={sendMessage}>Send</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
