package af.example.expenditure.Web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import af.example.expenditure.Service.TestService;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/")
public class homeResource {
    @Autowired
    TestService testService;
 @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("home")
    public String home(){
        return "good";
    }

    @PostMapping("save")
      @PreAuthorize("hasAuthority('USER')")
    public void add(String data){
        testService.save(data);
    }
}
