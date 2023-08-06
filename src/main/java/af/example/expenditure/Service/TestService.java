package af.example.expenditure.Service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
@Service
public class TestService {
    Set<String>data = new HashSet<>();
    public void save(String d){
        data.add(d);
    }


 
}
