package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type Animal interface {
	Eat() string
	Move() string
	Speak() string
}
type Cow struct {
	name       string
	locomotion string
	noise      string
	food       string
}
type Snake struct {
	name       string
	locomotion string
	noise      string
	food       string
}
type Bird struct {
	name       string
	locomotion string
	noise      string
	food       string
}

func (c Cow) Eat()   { fmt.Println(c.name, "eats", c.food) }
func (c Cow) Move()  { fmt.Println(c.name, "can", c.locomotion) }
func (c Cow) Speak() { fmt.Println(c.name, "goes", c.noise) }

func (s Snake) Eat()   { fmt.Println(s.name, "eats", s.food) }
func (s Snake) Move()  { fmt.Println(s.name, "can", s.locomotion) }
func (s Snake) Speak() { fmt.Println(s.name, "goes", s.noise) }

func (b Bird) Eat()   { fmt.Println(b.name, "eats", b.food) }
func (b Bird) Move()  { fmt.Println(b.name, "can", b.locomotion) }
func (b Bird) Speak() { fmt.Println(b.name, "goes", b.noise) }

func main() {

	var Snakes = []Snake{}
	var Cows = []Cow{}
	var Birds = []Bird{}

	scanner := bufio.NewScanner(os.Stdin)
	for {
		fmt.Print(">")
		if scanner.Scan() {
			scanIn := scanner.Text()
			scanLwr := strings.ToLower(scanIn)
			scanMain := strings.Fields(scanLwr)
			Scan0 := scanMain[0]
			Scan1 := scanMain[1]
			Scan2 := scanMain[2]

			if Scan0 == "newanimal" {
				if Scan2 == "cow" {
					Cows = append(Cows, Cow{Scan1, "walk", "moo", "grass"})
					fmt.Println("Created it!")
				} else if Scan2 == "bird" {
					Birds = append(Birds, Bird{Scan1, "fly", "peep", "worms"})
					fmt.Println("Created it!")
				} else if Scan2 == "snake" {
					Snakes = append(Snakes, Snake{Scan1, "slither", "hiss", "mice"})
					fmt.Println("Created it!")
				}
			} else if Scan0 == "query" {
				for i := 0; i < len(Snakes); i++ {
					if Scan1 == Snakes[i].name {
						if Scan2 == "eat" {
							Snakes[i].Eat()
						} else if Scan2 == "move" {
							Snakes[i].Move()
						} else if Scan2 == "speak" {
							Snakes[i].Speak()
						}
					}
				}
				for i := 0; i < len(Birds); i++ {
					if Scan1 == Birds[i].name {
						if Scan2 == "eat" {
							Birds[i].Eat()
						} else if Scan2 == "move" {
							Birds[i].Move()
						} else if Scan2 == "speak" {
							Birds[i].Speak()
						}
					}
				}
				for i := 0; i < len(Cows); i++ {
					if Scan1 == Cows[i].name {
						if Scan2 == "eat" {
							Cows[i].Eat()
						} else if Scan2 == "move" {
							Cows[i].Move()
						} else if Scan2 == "speak" {
							Cows[i].Speak()
						}
					}
				}
			}

		}
	}
}
