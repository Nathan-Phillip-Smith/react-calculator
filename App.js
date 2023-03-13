class App extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
          upperDisplayText: '',
          lowerDisplayText: '0',
          number: '',
          equation: []
        }
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event) {
        if (event.target.innerHTML === 'c') {
          this.setState({
            lowerDisplayText: '0',
            upperDisplayText: '',
            number: '',
            equation: []
          })
        } else if (event.target.innerHTML === '=') {
          let solve = [...this.state.equation, this.state.number]
          let num = 0
          if (Number(solve[solve.length - 1]) && solve.length > 1){
            for (let i = 0; i < solve.length;) {
              num = solve[0]
              if(solve[1] === '+') {
                num = Number(num) + Number(solve[2])
                if (solve.length === 3){
                  solve = num 
                } else {
                  solve = solve.slice(3)
                  solve.unshift(num)
                }
              } else  if(solve[1] === '-') {
                num = Number(num) - Number(solve[2])
                if (solve.length === 3){
                  solve = num 
                } else {
                  solve = solve.slice(3)
                  solve.unshift(num)
                }
                
              } else if(solve[1] === 'x') {
                num = Number(num) * Number(solve[2])
                if (solve.length === 3){
                  solve = num 
                } else {
                  solve = solve.slice(3)
                  solve.unshift(num)
                }
              } else if(solve[1] === '/') {
                num = Number(num) / Number(solve[2])
                if (solve.length === 3){
                  solve = num 
                } else {
                  solve = solve.slice(3)
                  solve.unshift(num)
                }
              } else {
                i = solve.length
              }
            }
           this.setState({
            upperDisplayText: String(solve),
            lowerDisplayText: String(solve),
            number: String(solve),
            equation: []
           })
            
          }
          
          
        } else if (event.target.innerHTML === '0') {
          if (this.state.number === '') {
            this.setState({
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: this.state.number + event.target.innerHTML,
              number: this.state.number + event.target.innerHTML,
            })
          } else if (this.state.number[0] === '0' && this.state.number[1]) {
            this.setState({
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: this.state.number + event.target.innerHTML,
              number: this.state.number + event.target.innerHTML,
            })
          } else if (this.state.number[0] !== '0' && this.state.number[0] !== '') {
            this.setState({
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: this.state.number + event.target.innerHTML,
              number: this.state.number + event.target.innerHTML,
            })
          }
        } else if (Number(event.target.innerHTML)) {
          this.setState({
            upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
            lowerDisplayText: this.state.number + event.target.innerHTML,
            number: this.state.number + event.target.innerHTML,
          })
          
        } else if (event.target.innerHTML === '-') {
          if (this.state.number === '') {
            this.setState({
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: this.state.number + event.target.innerHTML,
              number: this.state.number + event.target.innerHTML,
            })
          } else if (this.state.number !== '-') {
            this.setState({
              equation: [...this.state.equation, this.state.number, '-'],
              number: '',
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
            
          }
    
        } else if (event.target.innerHTML === '.') {
          if (!this.state.number.split('').includes('.')) {
            this.setState({
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: this.state.number + event.target.innerHTML,
              number: this.state.number + event.target.innerHTML,
            })
          }
    
        } else if (event.target.innerHTML === '+') {
          
          if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === '-' && this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 2] !== '-'){
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), '+'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          } else if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === 'x') {
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), '+'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          } else if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === '/') {
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), '+'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          }else if (this.state.number !== ''&& this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] !== '-') {
            this.setState({
              equation: [...this.state.equation, this.state.number, '+'],
              number: '',
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
        }
          
          
        } else if (event.target.innerHTML === 'x') {
          if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === '-' && this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 2] !== '-'){
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), 'x'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          } else if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === '+') {
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), 'x'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          } else if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === '/') {
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), 'x'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          }else if (this.state.number !== ''&& this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] !== '-') {
            this.setState({
              equation: [...this.state.equation, this.state.number, 'x'],
              number: '',
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
        }
    
        } else if (event.target.innerHTML === '/') {
          if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === '-' && this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 2] !== '-'){
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), '/'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          } else if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === 'x') {
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), '/'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          } else if (this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] === '+') {
            this.setState({
              equation: [...this.state.equation.slice(0,(this.state.equation.length - 1)), '/'],
              number: '',
              upperDisplayText: this.state.upperDisplayText.split('').slice(0, (this.state.upperDisplayText.split('').length - 1)).join('') + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
          }else if (this.state.number !== '' && this.state.upperDisplayText.split('')[(this.state.upperDisplayText.split('').length) - 1] !== '-') {
            this.setState({
              equation: [...this.state.equation, this.state.number, '/'],
              number: '',
              upperDisplayText: this.state.upperDisplayText + event.target.innerHTML,
              lowerDisplayText: event.target.innerHTML,
            })
        }
    
        }
      }
    
      render() {
        return (
          <div className="calculator">
            <Display 
              upperDisplayText={this.state.upperDisplayText}
              lowerDisplayText={this.state.lowerDisplayText}
            />
            <Buttons 
              handleClick={this.handleClick}
            />
          </div>
        );
      }
      
    }
    
    
    